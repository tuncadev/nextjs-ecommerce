export function getAllowedHosts(req: Request): boolean {
  try {
 
    if (!req) return false;

		const allowedHosts = process.env.ALLOWED_HOSTS?.split(",").map(h => h.trim()) || [];
		const clientHost = req.headers.get("host") || req.headers.get("x-forwarded-host") || "";
		console.log("allowedHosts: " + allowedHosts, " | clientHost: " + clientHost);
		if (!allowedHosts.includes(clientHost.split(":")[0])) { 
			
			return false;
		}
    return true;
  } catch (error) {
    console.error("Error checking allowed hosts:", error instanceof Error ? error.message : "Невідома помилка");
    return false;
  }
}
