package util

import (
	"golang.org/x/crypto/bcrypt"
)

type PasswordService struct{}

type PasswordServiceInterface interface {
	HashPassword(password string) (string, error)
}

func NewPasswordService() *PasswordService {
	return &PasswordService{}
}

func (p *PasswordService) HashPassword(password string) (string, error) {
	hashedBytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	if err != nil {
		return "", err
	}

	return string(hashedBytes), nil
}
