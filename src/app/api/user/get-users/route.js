const USERS_API_URL = process.env.WP_USERS_API_URL + "?context=edit";
const ADMIN_USERNAME = process.env.WP_ADMIN_USERNAME; // Your WP username
const ADMIN_PASSWORD = process.env.WP_ADMIN_PASSWORD; // Generated WP App Password

export async function GET() {
	try {
		console.error("WordPress Login Process");
			// Step 1: Authenticate and Get Token
			const loginRes = await fetch(`${process.env.WP_BASE_API}/jwt-auth/v1/token`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
							username: ADMIN_USERNAME,
							password: ADMIN_PASSWORD
					})
			});

			if (!loginRes.ok) {
					const errorText = await loginRes.text();
					console.error("❌ WordPress Login Error:", errorText);
					throw new Error(`Failed to login: ${loginRes.statusText}`);
			}

			const { token } = await loginRes.json();
 

			// Step 2: Fetch Users with JWT Token
			const usersRes = await fetch(`${process.env.WP_USERS_API_URL}?context=edit`, {
					method: "GET",
					headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${token}`,
					},
			});

			if (!usersRes.ok) {
					const errorText = await usersRes.text();
					console.error("❌ WordPress API error:", errorText);
					throw new Error(`Error fetching users: ${usersRes.statusText}`);
			}

			const rawUsers = await usersRes.json();

			// 🛠 Format the data to match the expected structure
			const formattedUsers = rawUsers.map(user => ({
					id: user.id,
					name: user.name,
					username: user.username,
					email: user.email,
					role: user.roles[0] || "customer", // Default to customer if no role
					created_at: user.registered_date || null, // Use registered date if available
			}));

			return new Response(JSON.stringify({ 
					message: "Users Fetched",
					data: formattedUsers,
			}), {
					status: 200,
					headers: { "Content-Type": "application/json" },
			});

	} catch (error) {
			console.error("❌ Error getting users:", error.message);
			return new Response(JSON.stringify({ 
					message: "Error getting users", 
					error: error.message 
			}), {
					status: 500,
					headers: { "Content-Type": "application/json" },
			});
	}
}
