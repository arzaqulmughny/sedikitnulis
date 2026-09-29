package validation

import (
	"errors"
	"reflect"
	"strings"

	"github.com/go-playground/validator/v10"
)

var messages = map[string]string{
	"required": "{field} wajib diisi",
	"email":    "Format email tidak valid",
	"min":      "{field} minimal {param} karakter",
	"max":      "{field} maksimal {param} karakter",
}

var labels = map[string]string{
	"username": "Username",
}

func FormatErrors(err error) map[string]string {
	var ve validator.ValidationErrors

	if !errors.As(err, &ve) {
		return map[string]string{"error": err.Error()}
	}

	out := make(map[string]string, len(ve))

	for _, fe := range ve {
		tmpl, ok := messages[fe.Tag()]

		if !ok {
			tmpl = "{field tidak valid}"
		}

		label := fe.Field()

		if l, ok := labels[label]; ok {
			label = l
		}

		message := strings.NewReplacer(
			"{field}", label,
			"{param}", fe.Param(),
		).Replace(tmpl)

		out[fe.Field()] = message
	}

	return out
}

func NewValidator() *validator.Validate {
	v := validator.New()

	v.RegisterTagNameFunc(func(f reflect.StructField) string {
		name := strings.SplitN(f.Tag.Get("json"), ",", 2)[0]

		if name == "-" || name == "" {
			return f.Name
		}

		return name
	})

	return v
}
