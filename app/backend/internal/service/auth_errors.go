package service

import "errors"

var (
	ErrUsernameAlreadyUsed = errors.New("Username telah digunakan")
	ErrEmailAlreadyUsed    = errors.New("Email telah digunakan")
	ErrDatabase            = errors.New("Database error")
)
