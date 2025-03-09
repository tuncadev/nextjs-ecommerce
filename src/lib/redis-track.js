import { createClient } from "redis";

const client = createClient({
    url: process.env.REDIS_URL,
});

client.on("error", (err) => console.error("❌ Redis Tracking Error:", err));

async function connectRedis() {
    if (!client.isOpen) {
        try {
            await client.connect();
        } catch (error) {
            console.error("❌ Redis connection failed:", error);
        }
    }
}

// ** Save Visitor **
export async function saveVisitorToRedis(visitorId, data) {
	try {
		await connectRedis();
		await client.hSet(`tracking`, `visitors:${visitorId}`, JSON.stringify(data));
} catch (error) {
		console.error(`❌ Error saving visitor (${visitorId}):`, error);
}
}

// ** Get Visitor **
export async function getVisitorFromRedis(visitorId) {
	try {
		await connectRedis();
		const data = await client.hGet(`tracking`, `visitors:${visitorId}`);
		return data ? JSON.parse(data) : null;
} catch (error) {
		console.error(`❌ Error retrieving visitor (${visitorId}):`, error);
		return null;
}
}

// ** Save Page Visit **
export async function savePageToRedis(url, data) {
	try {
		await connectRedis();
		await client.hSet(`tracking`, `pages:${url}`, JSON.stringify(data));
} catch (error) {
		console.error(`❌ Error saving page (${url}):`, error);
}
}

// ** Get Page Visit **
export async function getPageFromRedis(url) {
	try {
		await connectRedis();
		const data = await client.hGet(`tracking`, `pages:${url}`);
		return data ? JSON.parse(data) : null;
} catch (error) {
		console.error(`❌ Error retrieving page (${url}):`, error);
		return null;
}
}

// ** Get All Visitors **
export async function getAllVisitors() {
    try {
        await connectRedis();
        const visitorIds = await client.sMembers("tracking:visitors");
        const visitors = await Promise.all(
            visitorIds.map(async (id) => ({
                id,
                data: await getVisitor(id),
            }))
        );
        return visitors;
    } catch (error) {
        console.error("❌ Error retrieving all visitors:", error);
        return null;
    }
}

// ** Get All Pages **
export async function getAllPages() {
    try {
        await connectRedis();
        const pageUrls = await client.sMembers("tracking:pages");
        const pages = await Promise.all(
            pageUrls.map(async (url) => ({
                url,
                data: await getPage(url),
            }))
        );
        return pages;
    } catch (error) {
        console.error("❌ Error retrieving all pages:", error);
        return null;
    }
}
export async function getAllTrackingData() {
	try {
			await connectRedis();
			const data = await client.hGetAll(`tracking`);
			if (!data) return null;

			const parsedData = Object.entries(data).reduce((acc, [key, value]) => {
					const [type, id] = key.split(":");
					if (!acc[type]) acc[type] = {};
					acc[type][id] = JSON.parse(value);
					return acc;
			}, {});

			return parsedData;
	} catch (error) {
			console.error("❌ Error retrieving all tracking data:", error);
			return null;
	}
}