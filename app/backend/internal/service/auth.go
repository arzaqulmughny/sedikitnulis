package service

import (
	"backend/internal/apperror"
	"backend/internal/dto"
	"backend/internal/repository"
	"backend/internal/util"
	"fmt"
)

type AuthService struct {
	userRepository  repository.UserRepositoryInterface
	passwordService util.PasswordServiceInterface
	jwtService      util.JWTServiceInterface
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
		return fmt.Errorf("%w: %w", apperror.ErrDatabase, err)
	}

	if exists {
		return apperror.ErrUsernameAlreadyUsed
	}

	// 2. Validate email not exist
	exists, err = s.userRepository.ExistsByEmail(request.Email)

	if err != nil {
		return fmt.Errorf("%w: %w", apperror.ErrDatabase, err)
	}

	if exists {
		return apperror.ErrEmailAlreadyUsed
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
		return nil, fmt.Errorf("%w: %v", apperror.ErrHashPassword, err)
	}

	user, err := s.userRepository.CreateUserWithTopics(request, passwordHash)

	if err != nil {
		return nil, fmt.Errorf("%w: %w", apperror.ErrCreateUser, err)
	}

	// 3. Create JWT
	token, err := s.jwtService.GeneratePairToken(user.Id)

	if err != nil {
		return nil, apperror.ErrInternal
	}

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
