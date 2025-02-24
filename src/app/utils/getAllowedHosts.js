export function getAllowedHosts(req) { 
	console.log("Get the request: " + req.headers.get("host"));

	try {
			if (!req) return false;

			const allowedHosts = process.env.ALLOWED_HOSTS.split(",").map(host => host.trim());

			const clientHost = req.headers.get("host") || "";
			const acceptHeader = req.headers.get("accept") || "";
			const isBrowserRequest = acceptHeader.includes("text/html");

			if (!allowedHosts.some(host => clientHost.includes(host)) || isBrowserRequest) {
					return false;
			}
			return true;
	} catch (error) {
			console.error("Error checking allowed hosts:", error);
			return false;
	}
}
