package service

import (
	"backend/internal/dto"
	"backend/internal/repository"
	"backend/internal/util"
	"errors"
)

type AuthService struct {
	userRepository  *repository.UserRepository
	passwordService *util.PasswordService
	jwtService      *util.JWTService
}

func NewAuthService(userRepository *repository.UserRepository, passwordService *util.PasswordService, jwtService *util.JWTService) *AuthService {
	return &AuthService{
		userRepository:  userRepository,
		passwordService: passwordService,
		jwtService:      jwtService,
	}
}

func (s *AuthService) ExistByUsernameAndEmail(request dto.ExistByEmailAndUsernameRequest) error {
	// 1. Validate username not exist
	exists, err := s.userRepository.ExistsByUsername(request.Username)

	if err != nil {
		return err
	}

	if exists {
		return errors.New("Username telah digunakan")
	}

	// 2. Validate email not exist
	exists, err = s.userRepository.ExistsByEmail(request.Email)

	if err != nil {
		return err
	}

	if exists {
		return errors.New("Email telah digunakan")
	}

	return nil
}

func (s *AuthService) Register(request dto.RegisterRequest) (*dto.RegisterData, error) {
	// 1. Validate username and email not used
	err := s.ExistByUsernameAndEmail(dto.ExistByEmailAndUsernameRequest{
		Username: request.Username,
		Email:    request.Email,
	})

	if err != nil {
		return nil, err
	}

	// 2. Create user
	passwordHash, err := s.passwordService.HashPassword(request.Password)

	if err != nil {
		return nil, err
	}

	user, err := s.userRepository.CreateUserWithTopics(request, passwordHash)

	// 3. Create JWT
	token, err := s.jwtService.GeneratePairToken(user.Id)

	return &dto.RegisterData{
		UserData: dto.UserData{
			Id:       user.Id,
			Username: user.Username,
			Email:    user.Email,
		},
		UserPairTokenData: dto.UserPairTokenData{
			AccessToken:  token.AccessToken,
			RefreshToken: token.RefreshToken,
		},
	}, nil
}
