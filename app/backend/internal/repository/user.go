package repository

import (
	"backend/internal/dto"
	"database/sql"
	"fmt"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (r *UserRepository) ExistsByUsername(username string) (bool, error) {
	var count int
	err := r.db.QueryRow("SELECT COUNT(id) FROM users WHERE username = $1", username).Scan(&count)

	if err != nil {
		return false, fmt.Errorf("Failed to check username: %w", err)
	}

	return count > 0, nil
}

func (r *UserRepository) ExistsByEmail(email string) (bool, error) {
	var count int
	err := r.db.QueryRow("SELECT COUNT(*) FROM users WHERE email = $1", email).Scan(&count)

	if err != nil {
		return false, fmt.Errorf("Failed to check email: %w", err)
	}

	return count > 0, nil
}

func (r *UserRepository) CreateUser(tx *sql.Tx, username string, email string, passwordHash string) (int, error) {
	var id int

	err := tx.QueryRow("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id", username, email, passwordHash).Scan(&id)

	if err != nil {
		return 0, fmt.Errorf("Failed create a new user: %w", err)
	}

	return id, nil
}

func (r *UserRepository) AddUserTopics(tx *sql.Tx, userId int, topicIds []int) error {
	if len(topicIds) == 0 {
		return nil
	}

	stmt, err := tx.Prepare("INSERT INTO user_topics (user_id, topic_id) VALUES ($1, $2)")

	if err != nil {
		return fmt.Errorf("Failed to prepare statement for adding user topics: %w", err)
	}

	defer stmt.Close()

	for _, topicId := range topicIds {
		_, err := stmt.Exec(userId, topicId)

		if err != nil {
			return fmt.Errorf("Failed to add user topics: %w", err)
		}
	}

	return nil
}

func (r *UserRepository) GetUserById(id int) (dto.UserData, error) {
	var user dto.UserData

	err := r.db.QueryRow("SELECT id, username, email FROM users WHERE id = ?", id).Scan(&user.Id, &user.Username, &user.Email)

	if err != nil {
		return dto.UserData{}, fmt.Errorf("Failed get user by id: %w", err)
	}

	return user, nil
}

func (r *UserRepository) CreateUserWithTopics(request dto.RegisterRequest, passwordHash string) (*dto.UserData, error) {
	tx, err := r.db.Begin()

	if err != nil {
		return nil, fmt.Errorf("")
	}

	defer tx.Rollback()

	id, err := r.CreateUser(tx, request.Username, request.Email, passwordHash)

	if err != nil {
		return nil, fmt.Errorf("Failed to create user: %w", err)
	}

	err = r.AddUserTopics(tx, id, request.SelectedTopics)

	if err != nil {
		return nil, fmt.Errorf("Failed to add user topics: %w", err)
	}

	if err = tx.Commit(); err != nil {
		return nil, fmt.Errorf("Failed to commit transasction")
	}

	user, err := r.GetUserById(id)

	return &dto.UserData{
		Id:       id,
		Username: user.Username,
		Email:    user.Email,
	}, nil
}
