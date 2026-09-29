package dto

type ExistByEmailAndUsernameRequest struct {
	Username string `json:"username" validate:"required,min=6,max=25"`
	Email    string `json:"email" validate:"required,email,max=255"`
}

type RegisterRequest struct {
	ExistByEmailAndUsernameRequest
	Password             string `json:"password" validate:"required,min=8,max=255"`
	PasswordConfirmation string `json:"password_confirmation" validate:"required,eqfield=Password"`
	SelectedTopics       []int  `json:"selected_topics" validate:"required,dive,gt=0"`
}
