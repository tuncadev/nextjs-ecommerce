import Database from "better-sqlite3";

// Initialize Database
const db = new Database("tracking.db");

// Create tables
db.exec(`
    CREATE TABLE IF NOT EXISTS visitors (
        id TEXT PRIMARY KEY,
        ip TEXT,
        user_agent TEXT,
        referrer TEXT,
        timestamp TEXT,
        visit_count INTEGER
    );

    CREATE TABLE IF NOT EXISTS pages (
        url TEXT PRIMARY KEY,
        visitor_id TEXT,
        ip TEXT,
        referrer TEXT,
        timestamp TEXT,
        visit_count INTEGER,
        FOREIGN KEY(visitor_id) REFERENCES visitors(id)
    );
`);


db.close();
