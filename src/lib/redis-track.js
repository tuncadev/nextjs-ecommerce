import { createClient } from "redis";

// Initialize Redis Client for Visitor Tracking
const client = createClient({
    url: process.env.REDIS_TRACK_URL,
});

client.on("error", (err) => console.error("❌ Redis Tracking Error:", err));

/**
 * Ensures Redis connection before any operation
 */
export async function connectRedis() {
    if (!client.isOpen) {
        try {
            await client.connect();
        } catch (error) {
            console.error("❌ Redis connection failed:", error);
        }
    }
}

/**
 * Saves visitor data in Redis using `visitor:{ip}` as a key
 */
export async function saveVisitorToRedis(visitorIp, data) {
    try {
        await connectRedis();
        await client.set(`visitor:${visitorIp}`, JSON.stringify(data), { EX: 60 * 60 * 24 }); // Expires in 24h
 
    } catch (error) {
        console.error(`❌ Error saving visitor (${visitorIp}):`, error);
    }
}

/**
 * Retrieves visitor data from Redis
 */
export async function getVisitorFromRedis(visitorIp) {
    try {
        await connectRedis();
        const data = await client.get(`visitor:${visitorIp}`);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error(`❌ Error retrieving visitor (${visitorIp}):`, error);
        return null;
    }
}

/**
 * Saves page visit data in Redis using `url:{pagePath}`
 */
export async function savePageToRedis(url, data) {
    try {
        await connectRedis();
        await client.set(`url:${url}`, JSON.stringify(data), { EX: 60 * 60 * 24 }); // Expires in 24h
 
    } catch (error) {
        console.error(`❌ Error saving page (${url}):`, error);
    }
}

/**
 * Retrieves page visit data from Redis
 */
export async function getPageFromRedis(url) {
    try {
        await connectRedis();
        const data = await client.get(`url:${url}`);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error(`❌ Error retrieving page (${url}):`, error);
        return null;
    }
}


/**
 * Retrieves all visitor logs
 */
export async function getAllVisitors() {
	try {
			await connectRedis();
			const keys = await client.keys("visitor:*");
			const visitors = await Promise.all(
					keys.map(async (key) => ({ [key]: await client.get(key) }))
			);
			return visitors;
	} catch (error) {
			console.error("❌ Error retrieving all visitor logs:", error);
			return null;
	}getAllPages
	
}

export async function getAllPages() {
	try {
			await connectRedis();
			const keys = await client.keys("url:*");
			const url = await Promise.all(
					keys.map(async (key) => ({ [key]: await client.get(key) }))
			);
			return url;
	} catch (error) {
			console.error("❌ Error retrieving all visitor logs:", error);
			return null;
	}
}