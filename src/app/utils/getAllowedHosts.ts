export function getAllowedHosts(req: Request): boolean {
  try {
    if (!req) return false;

    const allowedHosts = process.env.ALLOWED_HOSTS?.split(",").map(host => host.trim()) || [];
    const clientHost = req.headers.get("host") || "";
    const acceptHeader = req.headers.get("accept") || "";
    const isBrowserRequest = acceptHeader.includes("text/html");

    if (!allowedHosts.some(host => clientHost.includes(host)) || isBrowserRequest) {
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error checking allowed hosts:", error instanceof Error ? error.message : "Невідома помилка");
    return false;
  }
}
