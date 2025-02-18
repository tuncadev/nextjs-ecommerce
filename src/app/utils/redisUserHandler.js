import { getFromRedis, saveToRedis, removeFromRedis } from "@/lib/redis";

export async function redisUserHandler(action, visitorId, username = null, user_email = null, requestUserAgent = "Unknown Browser") {
    if (!visitorId) return { success: false, message: "Visitor ID is required", status: 400 };

    const redisUserKey = `users:${visitorId}`;
    const redisEmailKey = username ? `email:${user_email}` : null;

    if (action === "register" || action === "login") {

			if (!user_email) return { success: false, message: "user_email is required", status: 400 };
	
			// 🔹 Step 1: Get all visitorIds for this email
			let storedVisitorIds = await getFromRedis(`email:${user_email}`) || [];
			if (!Array.isArray(storedVisitorIds)) storedVisitorIds = [storedVisitorIds];
	
			// 🔹 Step 2: Ensure only the current visitor ID is updated
			let activeVisitorId = visitorId;
	
			// 🔹 Step 3: Check if user session exists for this visitorId
 
	

			let userData = await getFromRedis(`users:${activeVisitorId}`);

			if (!userData) {
					// 🔹 Step 4: Create new user entry
					const userRole = "customer";
					userData = [{
							id: activeVisitorId,
							email: user_email,
							role: userRole,
							loggedIn: true,
							browser: requestUserAgent, // ✅ Correctly assigns the browser info only to this session
					}];
			} else {
					// ✅ Ensure only this visitor ID gets updated, not previous sessions
					if (userData[0].id === activeVisitorId) {
							userData[0].loggedIn = true;
							userData[0].browser = requestUserAgent;
					}
			}
	
			// 🔹 Step 5: Save updated user data for this session
			await saveToRedis(`users:${activeVisitorId}`, userData);
	
			// 🔹 Step 6: Ensure visitorId is tracked under email
			if (!storedVisitorIds.includes(activeVisitorId)) {
					storedVisitorIds.push(activeVisitorId);
					await saveToRedis(`email:${user_email}`, storedVisitorIds);
			}

	
			return { success: true, message: `User ${action} successful`, status: 200 };
	}
	
	
    if (action === "logout") {

	
			// 🔹 Step 1: Find user data in Redis
			const redisUserKey = `users:${visitorId}`;
			let userData = await getFromRedis(redisUserKey);
	
			if (!userData) {
					return { success: false, message: "User session not found", status: 404 };
			}
	
			// 🔹 Step 2: Update `loggedIn: false`
			userData[0].loggedIn = false;
			await saveToRedis(redisUserKey, userData);

			return { success: true, message: "User logged out successfully", status: 200 };
	}
	

    return { success: false, message: "Invalid action", status: 400 };
}
