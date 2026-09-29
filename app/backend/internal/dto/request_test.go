package dto

import (
	"backend/internal/validation"
	"testing"

	"github.com/go-playground/validator/v10"
)

func TestExistsByEmailAndUsernameRequest_Validation(t *testing.T) {
	v := validation.NewValidator()

	tests := []struct {
		name     string
		input    ExistByEmailAndUsernameRequest
		wantTags map[string]string
	}{
		{
			name: "Invalid email format",
			input: ExistByEmailAndUsernameRequest{
				Username: "arza",
				Email:    "arza",
			},
			wantTags: map[string]string{"email": "email"},
		},
		{
			name: "Username required",
			input: ExistByEmailAndUsernameRequest{
				Email: "arza@email.com",
			},
			wantTags: map[string]string{"username": "required"},
		},
		{
			name: "Email required",
			input: ExistByEmailAndUsernameRequest{
				Username: "arza",
			},
			wantTags: map[string]string{"email": "required"},
		},
		{
			name: "Username should have at least 6 characters",
			input: ExistByEmailAndUsernameRequest{
				Username: "arz",
				Email:    "arza@email.com",
			},
			wantTags: map[string]string{"username": "min"},
		},
		{
			name: "Username characted should less than 25 maximum",
			input: ExistByEmailAndUsernameRequest{
				Username: "Lorem ipsum dolor sit amet", // 26
				Email:    "arza@email.com",
			},
			wantTags: map[string]string{"username": "max"},
		},
		{
			name: "Valid input",
			input: ExistByEmailAndUsernameRequest{
				Username: "arza1234",
				Email:    "arza@email.com",
			},
			wantTags: nil,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			err := v.Struct(test.input)

			// Case: input valid, expect tidak ada error
			if test.wantTags == nil {
				// Tapi ternyata ada error
				if err != nil {
					t.Fatalf("Expected no error, got %v", err)
				}

				return
			}

			// Case: Input invalid
			// Expect diatas ada error, tapi ternyata errornya nil
			if err == nil {
				t.Fatalf("Expected validation error, got nil")
			}

			validationErrors := err.(validator.ValidationErrors)

			for field, wantTag := range test.wantTags {
				found := false

				for _, fe := range validationErrors {
					if fe.Field() == field {
						found = true

						if fe.Tag() != wantTag {
							t.Errorf("Field %q: expected tag %q, got %q", field, wantTag, fe.Tag())
						}

						break
					}
				}

				if !found {
					t.Errorf("Expected validation error for field %q", field)
				}
			}
		})
	}
}
