export function getOrCreateVisitorId() {
	if (typeof window === "undefined") return null; // ✅ Prevents running on the server

	let visitorId = localStorage.getItem("visitorId");

	if (!visitorId) {
			visitorId = crypto.randomUUID(); // Generate a new UUID
			localStorage.setItem("visitorId", visitorId);
	}

	return visitorId;
}
