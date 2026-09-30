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
	db, mock, err := sqlmock.New()
	require.NoError(t, err)

	repo := NewUserRepository(db)

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
			require.NoError(t, mock.ExpectationsWereMet())

			if err != nil {
				if test.wantErr == nil {
					t.Errorf("Expected no error, got: %v", err)
				} else {
					assert.ErrorIs(t, test.wantErr, err)
				}
			} else {
				if test.wantErr != nil {
					t.Errorf("Expected error: %v, got nil", test.wantErr)
				}
			}

			if test.wantExists {
				assert.Equal(t, test.wantExists, result)
			}
		})
	}
}
