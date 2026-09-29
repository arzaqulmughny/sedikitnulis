package dto

type HandlerResponse struct {
	Success bool              `json:"success"`
	Message string            `json:"message"`
	Data    any               `json:"data"`
	Errors  map[string]string `json:"errors,omitempty"`
}

type ExistByEmailAndUsernameData struct {
	Username string `json:"username"`
	Email    string `json:"email"`
}

type ExistByEmailAndUsernameResponse struct {
	HandlerResponse
	Data ExistByEmailAndUsernameData `json:"data"`
}

type UserData struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

type UserPairTokenData struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
}

type RegisterData struct {
	UserData
	UserPairTokenData
}

type RegisterResponse struct {
	HandlerResponse
	Data RegisterData
}
