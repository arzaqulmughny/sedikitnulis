package service

import "backend/internal/dto"

type MockUserRepository struct {
	UsernameExists bool
	EmailExists    bool
	UsernameError  error
	EmailError     error
}

func (m *MockUserRepository) ExistsByUsername(username string) (bool, error) {
	return m.UsernameExists, m.UsernameError
}

func (m *MockUserRepository) ExistsByEmail(email string) (bool, error) {
	return m.EmailExists, m.EmailError
}

func (m *MockUserRepository) CreateUserWithTopics(request dto.RegisterRequest, passwordHash string) (*dto.UserData, error) {
	return nil, nil
}
