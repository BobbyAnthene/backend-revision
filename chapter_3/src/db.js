import { DatabaseSync } from "node:sqlite"
const db = new DatabaseSync(':memory:')

// SQL executables for the Database
db.exec(`
    CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
    )
    `)

db.exec(`
    CREATE TABLE todos (
    id INTEGER,
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT,
    status BOOLEAN DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(id)
    )
    `)

export default db