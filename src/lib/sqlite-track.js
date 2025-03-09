import Database from "better-sqlite3";

const db = new Database("tracking.db");

// ** Save Visitor **
export function saveVisitor(visitorId, data) {
    const stmt = db.prepare(`
        INSERT INTO visitors (id, ip, user_agent, referrer, timestamp, visit_count)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET 
            visit_count = visit_count + 1,
            timestamp = excluded.timestamp
    `);
    stmt.run(visitorId, data.ip, data.userAgent, data.referrer, data.timestamp, 1);
}

// ** Get Visitor **
export function getVisitor(visitorId) {
    const stmt = db.prepare("SELECT * FROM visitors WHERE id = ?");
    return stmt.get(visitorId);
}

// ** Save Page Visit **
export function savePage(url, visitorId, data) {
 
    const stmt = db.prepare(`
        INSERT INTO pages (url, visitor_id, ip, referrer, timestamp, visit_count)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(url) DO UPDATE SET 
            visit_count = visit_count + 1,
            timestamp = excluded.timestamp
    `);
    stmt.run(url, visitorId, data.ip, data.referrer, data.timestamp, 1);
}

// ** Get Page Visit **
export function getPage(url) {
    const stmt = db.prepare("SELECT * FROM pages WHERE url = ?");
    return stmt.get(url);
}

// ** Get All Visitors **
export function getAllVisitors() {
    return db.prepare("SELECT * FROM visitors").all();
}

// ** Get All Pages **
export function getAllPages() {
    return db.prepare("SELECT * FROM pages").all();
}

// ** Close DB (optional) **
export function closeDB() {
    db.close();
}
