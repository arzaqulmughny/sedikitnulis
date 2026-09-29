package dto

import (
	"backend/internal/validation"
	"testing"

	"github.com/go-playground/validator/v10"
)

var v = validation.NewValidator()

type ValidationTest struct {
	name     string
	input    any
	wantTags map[string]string
}

func TestExistsByEmailAndUsernameRequest_Validation(t *testing.T) {
	tests := []ValidationTest{
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
			assertValidation(t, test)
		})
	}
}

func TestRegisterRequest_Validation(t *testing.T) {
	tests := []ValidationTest{
		{
			name: "Confirm password should error if not equal to password field",
			input: RegisterRequest{
				ExistByEmailAndUsernameRequest: ExistByEmailAndUsernameRequest{
					Username: "arza1234",
					Email:    "arza@email.com",
				},
				Password:             "12345678",
				PasswordConfirmation: "123412345",
				SelectedTopics:       []int{1, 2},
			},
			wantTags: map[string]string{"password_confirmation": "eqfield"},
		},
		{
			name:     "Required field",
			input:    RegisterRequest{},
			wantTags: map[string]string{"password": "required", "password_confirmation": "required", "selected_topics": "required"},
		},
		{
			name: "Password at least has 8 characters",
			input: RegisterRequest{
				ExistByEmailAndUsernameRequest: ExistByEmailAndUsernameRequest{
					Username: "arza1234",
					Email:    "arza@email.com",
				},
				Password:             "1234",
				PasswordConfirmation: "1234",
				SelectedTopics:       []int{1, 2},
			},
			wantTags: map[string]string{"password": "min"},
		},
		{
			name: "Password should less than 255 characters",
			input: RegisterRequest{
				ExistByEmailAndUsernameRequest: ExistByEmailAndUsernameRequest{
					Username: "arza1234",
					Email:    "arza@email.com",
				},
				Password:             "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis",
				PasswordConfirmation: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis",
				SelectedTopics:       []int{1, 2},
			},
			wantTags: map[string]string{"password": "max"},
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			assertValidation(t, test)
		})
	}
}

func assertValidation(
	t *testing.T,
	validationTest ValidationTest,
) {
	t.Helper()

	err := v.Struct(validationTest.input)

	// Case: input valid, expect tidak ada error
	if validationTest.wantTags == nil {
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

	for field, wantTag := range validationTest.wantTags {
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

}
