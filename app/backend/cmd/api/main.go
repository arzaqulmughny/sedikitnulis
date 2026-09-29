package main

import (
	"backend/internal/config"
	"backend/internal/database"
	"backend/internal/handler"
	"backend/internal/repository"
	"backend/internal/service"
	"backend/internal/util"
	"backend/internal/validation"
	"log"

	"github.com/gofiber/fiber/v3"
)

func main() {
	cfg := config.Load()

	db, err := database.NewPostgres(cfg.DatabaseURL)

	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	log.Printf("Database connected!")

	// Initialize dependencies
	passwordUtil := util.NewPasswordService()
	userRepository := repository.NewUserRepository(db)
	jwtService := util.NewJWTService(cfg.JWTSecret)
	authService := service.NewAuthService(userRepository, passwordUtil, jwtService)
	validator := validation.NewValidator()
	authHandler := handler.NewAuthHandler(authService, validator)

	// Create fiber app
	app := fiber.New()

	// Routes
	api := app.Group("/api")
	api.Post("/register/exists-email-username", authHandler.ExistByEmailAndUsername)
	api.Post("/register", authHandler.Register)

	// Start server
	log.Printf("Server will run on port %s", cfg.AppPort)
	log.Fatal(app.Listen(":" + cfg.AppPort))
}
