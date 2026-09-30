package util

import (
	"backend/internal/dto"
	"errors"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type JWTService struct {
	secretKey string
}

type JWTServiceInterface interface {
	GenerateToken(userId int, tokenType string, duration time.Duration) (string, error)
	GenerateAccessToken(userId int) (string, error)
	GenerateRefreshToken(userId int) (string, error)
	GeneratePairToken(userId int) (*dto.UserPairTokenData, error)
	ValidateToken(tokenString string) (*CustomClaims, error)
}

func NewJWTService(secretKey string) *JWTService {
	return &JWTService{
		secretKey: secretKey,
	}
}

type CustomClaims struct {
	UserId int `json:"user_id"`
	jwt.RegisteredClaims
	TokenType string
}

func (j *JWTService) GenerateToken(userId int, tokenType string, duration time.Duration) (string, error) {
	claims := CustomClaims{
		UserId: userId,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(duration)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			Issuer:    "sedikitnulis",
		},
		TokenType: tokenType,
	}

	newClaims := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	token, err := newClaims.SignedString([]byte(j.secretKey))

	if err != nil {
		return "", fmt.Errorf("Failed generate jwt token: %w", err)
	}

	return token, nil
}

func (j *JWTService) GenerateAccessToken(userId int) (string, error) {
	return j.GenerateToken(userId, "access", 15*time.Minute)
}

func (j *JWTService) GenerateRefreshToken(userId int) (string, error) {
	return j.GenerateToken(userId, "refresh", 7*24*time.Hour)
}

func (j *JWTService) GeneratePairToken(userId int) (*dto.UserPairTokenData, error) {
	accessToken, err := j.GenerateAccessToken(userId)

	if err != nil {
		return nil, fmt.Errorf("Failed genereate access token: %w", err)
	}

	refreshToken, err := j.GenerateRefreshToken(userId)

	if err != nil {
		return nil, fmt.Errorf("Failed genereate refresh token: %w", err)
	}

	return &dto.UserPairTokenData{
		AccessToken:  accessToken,
		RefreshToken: refreshToken,
	}, nil
}

func (j *JWTService) ValidateToken(tokenString string) (*CustomClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("Invalid signing method")
		}

		return []byte(j.secretKey), nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*CustomClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, errors.New("Invalid token")
}
