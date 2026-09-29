package service

import (
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
			wantErr:        ErrUsernameAlreadyUsed,
		},
		{
			name:           "Email already exists",
			usernameExists: false,
			emailExists:    true,
			wantErr:        ErrEmailAlreadyUsed,
		},
		{
			name:        "Username check repository error",
			wantErr:     ErrDatabase,
			usernameErr: ErrDatabase,
		},
		{
			name:     "Email check repository error",
			wantErr:  ErrDatabase,
			emailErr: ErrDatabase,
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
