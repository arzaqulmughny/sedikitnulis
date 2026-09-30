package apperror

import "errors"

var (
	ErrUsernameAlreadyUsed = errors.New("username already used")
	ErrEmailAlreadyUsed    = errors.New("email already used")
	ErrDatabase            = errors.New("database error")
	ErrHashPassword        = errors.New("hash password error")
	ErrCreateUser          = errors.New("create user error")
	ErrInternal            = errors.New("internal server error")
)
