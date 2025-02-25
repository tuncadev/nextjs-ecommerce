import Database from 'better-sqlite3';
import { config } from 'dotenv';
import path from 'path';

// Load environment variables
config();

// Get SQLite database path from .env
const dbPath = process.env.SQLITE_PATH || 'bkdb.sqlite';
const db = new Database(dbPath);

// Create tables
const createTables = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS visitors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            visitor_token TEXT UNIQUE,
            ip_address TEXT,
            user_agent TEXT,
            no_track BOOLEAN DEFAULT false,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS page_visit_counts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            visitor_id INTEGER,
            url TEXT,
            visit_count INTEGER DEFAULT 1,
            last_visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(visitor_id) REFERENCES visitors(id)
        );
    `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS page_views (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            visitor_id INTEGER,
            user_id INTEGER,
            url TEXT,
            referrer_url TEXT,
            device TEXT,
            browser TEXT,
            os TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(visitor_id) REFERENCES visitors(id)
        );
    `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            ip_address TEXT,
            user_agent TEXT,
            payload TEXT,
            last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
};

// Initialize DB setup
createTables();


db.close();
