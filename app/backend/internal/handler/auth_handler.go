package handler

import (
	"backend/internal/dto"
	"backend/internal/service"
	"backend/internal/validation"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v3"
)

type AuthHandler struct {
	authService *service.AuthService
	validator   *validator.Validate
}

func NewAuthHandler(authService *service.AuthService, v *validator.Validate) *AuthHandler {
	return &AuthHandler{
		authService: authService,
		validator:   v,
	}
}

func (h *AuthHandler) ExistByEmailAndUsername(c fiber.Ctx) error {
	// 1. Parse JSON
	var req dto.ExistByEmailAndUsernameRequest
	if err := c.Bind().Body(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(dto.HandlerResponse{
			Success: false,
			Message: "Invalid JSON format",
		})
	}

	// 2. Request validation
	if err := h.validator.Struct(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(dto.HandlerResponse{
			Success: false,
			Message: "Request tidak valid",
			Errors:  validation.FormatErrors(err),
		})
	}

	// 3. Call service layer
	err := h.authService.ExistByUsernameAndEmail(req)
	if err != nil {
		return c.Status(fiber.StatusConflict).JSON(dto.HandlerResponse{
			Success: false,
			Message: err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(dto.HandlerResponse{
		Success: true,
		Message: "Username dan email dapat digunakan",
	})
}
