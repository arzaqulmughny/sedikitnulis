package service

import (
	"backend/internal/apperror"
	"backend/internal/dto"
	"errors"
	"testing"
)

func TestAuthService_ExistByUsernameAndEmail(t *testing.T) {
	tests := []struct {
		name           string
		usernameExists bool
		emailExists    bool
		wantErr        error
		usernameErr    error
		emailErr       error
	}{
		{
			name:           "Username already exists",
			usernameExists: true,
			emailExists:    false,
			wantErr:        apperror.ErrUsernameAlreadyUsed,
		},
		{
			name:           "Email already exists",
			usernameExists: false,
			emailExists:    true,
			wantErr:        apperror.ErrEmailAlreadyUsed,
		},
		{
			name:        "Username check repository error",
			wantErr:     apperror.ErrDatabase,
			usernameErr: apperror.ErrDatabase,
		},
		{
			name:     "Email check repository error",
			wantErr:  apperror.ErrDatabase,
			emailErr: apperror.ErrDatabase,
		},
		{
			name:    "Username and email valid",
			wantErr: nil,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			repo := &MockUserRepository{
				UsernameExists: test.usernameExists,
				EmailExists:    test.emailExists,
				UsernameError:  test.usernameErr,
				EmailError:     test.emailErr,
			}

			service := &AuthService{
				userRepository: repo,
			}

			request := dto.ExistByEmailAndUsernameRequest{
				Username: "arza",
				Email:    "arza@email.com",
			}

			err := service.ExistByUsernameAndEmail(request)

			if !errors.Is(err, test.wantErr) {
				t.Errorf("Expected error %v got %v", test.wantErr, err)
			}
		})
	}
}

func TestAuthService_Register(t *testing.T) {
	tests := []struct {
		name             string
		usernameExists   bool
		emailExists      bool
		wantErr          error
		usernameErr      error
		emailErr         error
		hashPasswordErr  error
		generateTokenErr error
		WantData         dto.RegisterData
		createUserErr    error
	}{
		{
			name:           "Username already exists",
			usernameExists: true,
			emailExists:    false,
			wantErr:        apperror.ErrUsernameAlreadyUsed,
		},
		{
			name:           "Email already exists",
			usernameExists: false,
			emailExists:    true,
			wantErr:        apperror.ErrEmailAlreadyUsed,
		},
		{
			name:        "Username check repository error",
			wantErr:     apperror.ErrDatabase,
			usernameErr: apperror.ErrDatabase,
		},
		{
			name:     "Email check repository error",
			wantErr:  apperror.ErrDatabase,
			emailErr: apperror.ErrDatabase,
		},
		{
			name:            "Hash password error",
			wantErr:         apperror.ErrHashPassword,
			hashPasswordErr: apperror.ErrHashPassword,
		},
		{
			name:          "Create user with topic error",
			wantErr:       apperror.ErrCreateUser,
			createUserErr: apperror.ErrCreateUser,
		},
		{
			name:             "Generate pair token JWT error",
			wantErr:          apperror.ErrInternal,
			generateTokenErr: apperror.ErrInternal,
		},
		{
			name:    "Username and email valid",
			wantErr: nil,
			WantData: dto.RegisterData{
				UserData: dto.UserData{
					Id:       1,
					Username: "arza",
					Email:    "arza@email.com",
				},
				UserPairTokenData: dto.UserPairTokenData{
					AccessToken:  "access-token",
					RefreshToken: "refresh-token",
				},
			},
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			repo := &MockUserRepository{
				UsernameExists:  test.usernameExists,
				EmailExists:     test.emailExists,
				UsernameError:   test.usernameErr,
				EmailError:      test.emailErr,
				WantUser:        test.WantData.UserData,
				CreateUserError: test.createUserErr,
			}

			passwordService := &MockPasswordService{
				ErrHashPassword: test.hashPasswordErr,
			}

			jwtService := &MockJWTService{
				ErrGeneratePairToken: test.generateTokenErr,
			}

			service := &AuthService{
				userRepository:  repo,
				passwordService: passwordService,
				jwtService:      jwtService,
			}

			request := dto.RegisterRequest{
				ExistByEmailAndUsernameRequest: dto.ExistByEmailAndUsernameRequest{
					Username: "arza",
					Email:    "arza@email.com",
				},
				Password:             "12345678",
				PasswordConfirmation: "12345678",
				SelectedTopics:       []int{1, 2},
			}

			data, err := service.Register(request)

			if err != nil {
				if test.wantErr == nil {
					t.Errorf("%v, Expected no error, got: %v", test.name, err)
				}

				if !errors.Is(err, test.wantErr) {
					t.Errorf("%v, Expected error %v got %v", test.name, test.wantErr, err)
				}
			} else {
				if test.WantData != (dto.RegisterData{}) {
					if data.Email != request.Email {
						t.Errorf("%v, Expected email: %v, got: %v", test.name, request.Email, data.Email)
					}

					if data.Username != request.Username {
						t.Errorf("%v, Expected username: %v, got: %v", test.name, request.Username, data.Username)
					}
				}
			}

		})
	}
}
