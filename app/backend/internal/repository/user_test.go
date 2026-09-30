package repository

import (
	"backend/internal/apperror"
	"regexp"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestUserRepository_ExistByUsername(t *testing.T) {
	tests := []struct {
		name       string
		username   string
		count      int
		mockErr    error
		wantErr    error
		wantExists bool
	}{
		{
			name:       "username already used",
			username:   "arza",
			count:      1,
			mockErr:    nil,
			wantExists: true,
			wantErr:    nil,
		},
		{
			name:       "username available",
			username:   "arza",
			count:      0,
			mockErr:    nil,
			wantExists: false,
			wantErr:    nil,
		},
		{
			name:       "check username error",
			username:   "arza",
			count:      0,
			mockErr:    apperror.ErrCheckUsernameExists,
			wantExists: false,
			wantErr:    apperror.ErrCheckUsernameExists,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			db, mock, err := sqlmock.New()
			require.NoError(t, err)
			defer db.Close()

			repo := NewUserRepository(db)

			expect := mock.ExpectQuery(regexp.QuoteMeta("SELECT COUNT(id) FROM users WHERE username = $1")).
				WithArgs(test.username)

			if test.mockErr != nil {
				expect.WillReturnError(test.mockErr)
			} else {
				expect.WillReturnRows(
					sqlmock.NewRows([]string{"count"}).AddRow(test.count),
				)
			}

			result, err := repo.ExistsByUsername(test.username)

			assert.ErrorIs(t, err, test.wantErr)
			assert.Equal(t, test.wantExists, result)

			require.NoError(t, mock.ExpectationsWereMet())
		})
	}
}

func TestUserRepository_ExistByEmail(t *testing.T) {
	tests := []struct {
		name       string
		email      string
		wantErr    error
		count      int
		mockErr    error
		wantExists bool
	}{
		{
			name:       "email available",
			email:      "arza@email.com",
			wantErr:    nil,
			wantExists: false,
			count:      0,
			mockErr:    nil,
		},
		{
			name:       "check email error",
			email:      "arza@email.com",
			wantErr:    apperror.ErrCheckEmailExists,
			mockErr:    apperror.ErrCheckEmailExists,
			wantExists: false,
			count:      0,
		},
		{
			name:       "email already used",
			email:      "arza@email.com",
			wantErr:    nil,
			mockErr:    nil,
			wantExists: true,
			count:      1,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			db, mock, err := sqlmock.New()
			require.NoError(t, err)
			defer db.Close()

			repo := NewUserRepository(db)

			expect := mock.ExpectQuery(regexp.QuoteMeta("SELECT COUNT(id) FROM users WHERE email = $1")).
				WithArgs(test.email)

			if test.mockErr != nil {
				expect.WillReturnError(test.mockErr)
			} else {
				expect.WillReturnRows(
					sqlmock.NewRows([]string{"count"}).AddRow(test.count),
				)
			}

			result, err := repo.ExistsByEmail(test.email)

			assert.ErrorIs(t, err, test.wantErr)
			assert.Equal(t, test.wantExists, result)

			require.NoError(t, mock.ExpectationsWereMet())
		})
	}
}
