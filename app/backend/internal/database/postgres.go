package database

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

func NewPostgres(databaseURL string) (*sql.DB, error) {
	log.Printf("%s", databaseURL)
	db, err := sql.Open("postgres", databaseURL)

	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}
