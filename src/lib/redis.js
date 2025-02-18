import { createClient } from "redis";

const client = createClient({
    url: process.env.REDIS_URL,
});

client.on("error", (err) => console.error("❌ Redis Client Error", err));

export async function connectRedis() {
	if (!client.isOpen) {

			try {
					await client.connect();
			} catch (error) {
					console.error("❌ Redis connection failed:", error);
			}
	}
}
 
		export async function saveToRedis(key, data) {
			try {
					await connectRedis(); // ✅ Ensure Redis is connected

					const jsonData = JSON.stringify(data); // 🔥 Convert to string before storing
					await client.set(key, jsonData);
			} catch (error) {
					console.error(`❌ Error saving to Redis (${key}):`, error);
			}
	}
	

	export async function getFromRedis(key) {
    try {
        await connectRedis();

        const data = await client.get(key);

        if (!data) return null; //
        if (typeof data !== "string") {
            console.warn(`⚠️ Unexpected non-string data found in Redis for key: ${key}`, data);
            return null;
        }

        return JSON.parse(data); // ✅ Now it's guaranteed to be a valid JSON string
    } catch (error) {
        console.error(`❌ Error retrieving from Redis (${key}):`, error);
        return null;
    }
}
export async function removeFromRedis(key) {
	try {
			await connectRedis(); // Ensure Redis is connected
			await client.del(key);
	} catch (error) {
			console.error(`❌ Error deleting from Redis (${key}):`, error);
	}
}
export async function overrideRedisKey(oldKey, newKey, data) {
	try {
			await connectRedis(); // Ensure Redis is connected

			if (oldKey && oldKey !== newKey) {
					await client.del(oldKey); // 🔥 Delete old key if different
			}

			// 🔹 Ensure the new `visitorId` is updated inside the user object
			if (Array.isArray(data) && data.length > 0) {
					data[0].id = newKey.replace("users:", ""); // Update user ID to match new visitorId
			}

			await client.set(newKey, JSON.stringify(data)); // 🔄 Save new data with updated ID
	} catch (error) {
			console.error(`❌ Error overriding Redis key (${oldKey} → ${newKey}):`, error);
	}
}


export async function getAllRedisData() {
	try {
			await connectRedis(); // Ensure Redis is connected

			const keys = await client.keys("*");
			const allData = await Promise.all(
					keys.map(async (key) => ({ [key]: await client.get(key) }))
			);

			return allData;
			
	} catch (error) {
			console.error("❌ Error retrieving all Redis data:", error);
			return null;
	}
}


// ✅ Export client for direct Redis access
export { client as redis };
