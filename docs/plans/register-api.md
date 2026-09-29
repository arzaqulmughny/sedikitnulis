# Plan: API Register - SedikitNulis

## Overview

Membangun API registrasi pengguna baru di backend Go, termasuk setup awal project backend dari nol. Endpoint ini akan dipanggil oleh frontend yang sudah ada di `/register` (3-step registration flow).

---

## 1. Setup Awal Project Go

### 1.1 Inisialisasi Go Module

```
app/backend/
├── go.mod                  # module: sedikitnulis/backend
├── main.go                 # entry point
├── cmd/
│   └── server/
│       └── main.go         # server bootstrap
├── internal/
│   ├── config/
│   │   └── config.go       # env loader (DB_URL, PORT, JWT_SECRET)
│   ├── database/
│   │   ├── database.go     # koneksi PostgreSQL
│   │   └── migrations/
│   │       └── 001_create_users.sql
│   ├── models/
│   │   ├── user.go         # struct User
│   │   └── topic.go        # struct Topic
│   ├── handlers/
│   │   └── auth.go         # handler POST /api/auth/register
│   ├── services/
│   │   └── auth.go         # business logic register
│   ├── repositories/
│   │   ├── user.go         # query user ke DB
│   │   └── topic.go        # query topic ke DB
│   ├── middleware/
│   │   └── cors.go         # CORS middleware
│   ├── dto/
│   │   ├── request.go      # struct request body
│   │   └── response.go     # struct response JSON
│   └── utils/
│       ├── password.go     # hash & verify password (bcrypt)
│       └── validator.go    # validasi input
├── .env.example            # template environment variables
└── .gitignore              # Go-specific gitignore
```

### 1.2 Dependencies (`go.mod`)

| Dependency | Fungsi |
|---|---|
| `github.com/go-chi/chi/v5` | HTTP router |
| `github.com/jackc/pgx/v5` | PostgreSQL driver |
| `golang.org/x/crypto` | bcrypt password hashing |
| `github.com/joho/godotenv` | Load .env file |
| `github.com/go-playground/validator/v10` | Request validation |

> **Alasan pilih library:** chi ringan dan idiomatik Go, pgx performa tinggi untuk Postgres, bcrypt standar untuk hash password.

---

## 2. Database Schema

### 2.1 Tabel `users`

```sql
CREATE TABLE users (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email       VARCHAR(255) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    username    VARCHAR(50)  NOT NULL UNIQUE,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
```

### 2.2 Tabel `topics`

```sql
CREATE TABLE topics (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Seed data (sesuai frontend: Programming, Career, Business, Finance, Technology)
INSERT INTO topics (name) VALUES
    ('Programming'), ('Career'), ('Business'), ('Finance'), ('Technology');
```

### 2.3 Tabel `user_topics` (pivot)

```sql
CREATE TABLE user_topics (
    user_id  UUID    NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    topic_id INTEGER NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, topic_id)
);
```

---

## 3. API Endpoint: Register

### 3.1 Spesifikasi

```
POST /api/auth/register
Content-Type: application/json
```

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123",
  "password_confirmation": "password123",
  "selected_topics": ["Programming", "Career"]
}
```

**Validasi:**
- `email` — required, format email valid, unik di database
- `password` — required, minimal 8 karakter
- `password_confirmation` — required, harus sama dengan `password`
- `selected_topics` — minimal 1 topik, setiap topik harus ada di tabel `topics`

**Response Success (201 Created):**

```json
{
  "status": "success",
  "message": "Registrasi berhasil",
  "data": {
    "id": "uuid-user",
    "email": "user@example.com",
    "username": "user",
    "created_at": "2026-09-17T12:00:00Z"
  }
}
```

**Response Error (400 Bad Request):**

```json
{
  "status": "error",
  "message": "Validasi gagal",
  "errors": {
    "email": "Email sudah terdaftar",
    "password": "Password minimal 8 karakter"
  }
}
```

### 3.2 Flow Register

```
Client → POST /api/auth/register
  │
  ├─ 1. Validasi request body (format, length, match)
  ├─ 2. Cek email sudah terdaftar? → 400
  ├─ 3. Generate username dari email (bagian sebelum @)
  ├─ 4. Hash password dengan bcrypt (cost 12)
  ├─ 5. Insert ke tabel `users`
  ├─ 6. Insert ke tabel `user_topics` (pivot)
  └─ 7. Return 201 + user data (tanpa password)
```

### 3.3 Username Generation

- Ambil bagian sebelum `@` dari email → `user@example.com` → `user`
- Jika sudah ada, append angka: `user1`, `user2`, dst.
- Sanitasi: hanya huruf, angka, underscore

---

## 4. Struktur Kode

### 4.1 Config (`internal/config/config.go`)

```go
type Config struct {
    Port       string // default: "8080"
    DBHost     string
    DBPort     string
    DBUser     string
    DBPassword string
    DBName     string
    JWTSecret  string
}
```

Load dari `.env` dengan `godotenv`.

### 4.2 Database Connection (`internal/database/database.go`)

```go
func Connect(cfg config.Config) (*pgxpool.Pool, error)
```

Menggunakan connection pool (`pgxpool`) untuk performa.

### 4.3 Models (`internal/models/user.go`)

```go
type User struct {
    ID        string    `json:"id"`
    Email     string    `json:"email"`
    Password  string    `json:"-"` // tidak pernah di-serialize ke JSON
    Username  string    `json:"username"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
}
```

### 4.4 DTO (`internal/dto/`)

```go
// request.go
type RegisterRequest struct {
    Email              string   `json:"email" validate:"required,email"`
    Password           string   `json:"password" validate:"required,min=8"`
    PasswordConfirm    string   `json:"password_confirmation" validate:"required,eqfield=Password"`
    SelectedTopics     []string `json:"selected_topics" validate:"required,min=1"`
}

// response.go
type APIResponse struct {
    Status  string      `json:"status"`
    Message string      `json:"message"`
    Data    interface{} `json:"data,omitempty"`
    Errors  interface{} `json:"errors,omitempty"`
}
```

### 4.5 Handler (`internal/handlers/auth.go`)

```go
func (h *AuthHandler) Register(w http.ResponseWriter, r *http.Request)
```

- Decode JSON body → `RegisterRequest`
- Panggil `AuthService.Register()`
- Return response sesuai hasil

### 4.6 Service (`internal/services/auth.go`)

```go
func (s *AuthService) Register(req dto.RegisterRequest) (*models.User, error)
```

- Validasi business logic
- Cek duplikasi email
- Generate username
- Hash password
- Simpan user + topics (dalam transaksi DB)
- Return user

### 4.7 Repository (`internal/repositories/user.go`)

```go
func (r *UserRepository) Create(ctx context.Context, user *models.User) error
func (r *UserRepository) ExistsByEmail(ctx context.Context, email string) (bool, error)
func (r *UserRepository) ExistsByUsername(ctx context.Context, username string) (bool, error)
```

### 4.8 Main Entry Point (`main.go`)

```go
func main() {
    // 1. Load config
    // 2. Connect database
    // 3. Run migrations (opsional, bisa manual)
    // 4. Init repositories → services → handlers
    // 5. Setup router (chi)
    // 6. Setup middleware (CORS, logging)
    // 7. Start server
}
```

---

## 5. CORS Configuration

Frontend berjalan di `localhost:3000`, backend di `localhost:8080`. Perlu CORS middleware:

```go
func CORSMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
        w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
        // ...
    })
}
```

---

## 6. Folder `.env.example`

```env
PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=sedikitnulis
JWT_SECRET=your-secret-key-here
```

---

## 7. Urutan Implementasi

| Step | Task | Keterangan |
|------|------|------------|
| 1 | Init Go module & install dependencies | `go mod init`, `go get` |
| 2 | Buat folder structure | Sesuai section 1.1 |
| 3 | Config & env loader | `internal/config/` |
| 4 | Database connection | `internal/database/` |
| 5 | SQL migration | Jalankan manual atau via Go code |
| 6 | Models | `internal/models/` |
| 7 | DTO (request/response) | `internal/dto/` |
| 8 | Repository layer | `internal/repositories/` |
| 9 | Service layer (business logic) | `internal/services/` |
| 10 | Handler layer | `internal/handlers/` |
| 11 | Router & middleware | CORS, logging, routes |
| 12 | Main entry point | `main.go` |
| 13 | Testing manual | curl / Postman |

---

## 8. Catatan Tambahan

- **Password tidak pernah di-return** di response API (gunakan `json:"-"` di struct)
- **Transaksi DB** untuk insert user + topics agar atomic (jika insert topics gagal, user juga di-rollback)
- **Username generation** harus handle race condition (gunakan UNIQUE constraint + retry)
- **Error messages dalam Bahasa Indonesia** sesuai UI frontend yang sudah ada
- **Tidak perlu JWT/login** di fase ini — cukup register saja
- Frontend `/register` page sudah ada UI-nya, hanya perlu di-wire ke API ini (di luar scope plan ini)
