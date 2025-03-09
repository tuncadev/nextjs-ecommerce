import { NextResponse } from "next/server";

export function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const userAgent = req.headers.get("user-agent") || "";
    const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";
    
    // ✅ Read referer from cookie (set by `LinkTracker`)
    let referer = req.cookies.get("tracking_referrer")?.value || "direct";
    
 
    // ✅ Exclude static assets & API requests (this prevents recursion)
    if (
        pathname.startsWith("/_next/") ||
        pathname.startsWith("/api/") ||  // Prevent tracking API from triggering middleware
        pathname.endsWith(".ico") ||
        pathname.endsWith(".jpg") ||
        pathname.endsWith(".png") ||
        pathname.endsWith(".woff2") ||
        pathname.endsWith(".css") ||
        pathname.endsWith(".js")
    ) {
        return NextResponse.next();
    }

    // ✅ Ignore bot requests
    if (userAgent.includes("bot") || userAgent.includes("Headless")) {
        return NextResponse.next();
    }

    // ✅ Detect full page load (server navigation)
    const acceptHeader = req.headers.get("accept") || "";
    const isRealPageVisit = acceptHeader.includes("text/html");

    if (isRealPageVisit) {
        fetch(`${req.nextUrl.origin}/api/track-visitor?path=${pathname}`, {
            method: "GET",
            keepalive: true,
            headers: {
                "User-Agent": userAgent,
                "X-Forwarded-For": ip,
                "X-Custom-Referer": referer, // ✅ Pass referer manually
            },
        }).catch((err) => console.error("Tracking failed:", err));
    }

    return NextResponse.next();
}

// ✅ Apply middleware only to pages, NOT API routes
export const config = {
    matcher: "/((?!api/).*)", // ✅ Prevents running on API routes
};
