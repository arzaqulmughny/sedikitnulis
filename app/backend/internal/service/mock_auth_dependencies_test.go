package service

import (
	"backend/internal/dto"
	"backend/internal/util"
	"time"
)

// User Repo
type MockUserRepository struct {
	UsernameExists  bool
	EmailExists     bool
	UsernameError   error
	EmailError      error
	WantUser        dto.UserData
	CreateUserError error
}

func (m *MockUserRepository) ExistsByUsername(username string) (bool, error) {
	return m.UsernameExists, m.UsernameError
}

func (m *MockUserRepository) ExistsByEmail(email string) (bool, error) {
	return m.EmailExists, m.EmailError
}

func (m *MockUserRepository) CreateUserWithTopics(request dto.RegisterRequest, passwordHash string) (*dto.UserData, error) {
	if m.CreateUserError != nil {
		return nil, m.CreateUserError
	}

	return &m.WantUser, nil
}

// JWT Service
type MockJWTService struct {
	ErrGeneratePairToken error
}

func (j *MockJWTService) GenerateToken(userId int, tokenType string, duration time.Duration) (string, error) {
	return "", nil
}
func (j *MockJWTService) GenerateAccessToken(userId int) (string, error) {
	return "", nil
}
func (j *MockJWTService) GenerateRefreshToken(userId int) (string, error) {
	return "", nil
}

func (j *MockJWTService) ValidateToken(tokenString string) (*util.CustomClaims, error) {
	return nil, nil
}

func (j *MockJWTService) GeneratePairToken(userId int) (*dto.UserPairTokenData, error) {
	if j.ErrGeneratePairToken != nil {
		return nil, j.ErrGeneratePairToken
	}

	return &dto.UserPairTokenData{
		AccessToken:  "access-token",
		RefreshToken: "refresh-token",
	}, nil
}

// Password Service
type MockPasswordService struct {
	ErrHashPassword error
}

func (p *MockPasswordService) HashPassword(password string) (string, error) {
	if p.ErrHashPassword != nil {
		return "", p.ErrHashPassword
	}

	return "hashed-password-" + password, nil
}
