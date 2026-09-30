package apperror

import "errors"

var (
	ErrUsernameAlreadyUsed = errors.New("username already used")
	ErrCheckUsernameExists = errors.New("error check username exists")
	ErrCheckEmailExists    = errors.New("error check email exists")
	ErrEmailAlreadyUsed    = errors.New("email already used")
	ErrDatabase            = errors.New("database error")
	ErrHashPassword        = errors.New("hash password error")
	ErrCreateUser          = errors.New("create user error")
	ErrInternal            = errors.New("internal server error")
)
