import { NextResponse } from "next/server";

export function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const userAgent = req.headers.get("user-agent") || "";

    // ✅ Exclude Next.js static files, assets, API calls, and unnecessary paths
    if (
        pathname.startsWith("/_next/") || // Next.js internal files
        pathname.startsWith("/api/") || // API calls should not be tracked
        pathname.endsWith(".ico") || // Favicon
        pathname.endsWith(".jpg") ||
        pathname.endsWith(".png") ||
        pathname.endsWith(".woff2") ||
        pathname.endsWith(".css") ||
        pathname.endsWith(".js")
    //    pathname === "/cart" || // Exclude cart page if needed
     //   pathname === "/auth" || // Exclude auth page if needed
      //  pathname === "/hot" // Exclude hot deals if needed
    ) {
        return NextResponse.next();
    }

    // 🛑 **Ensure it's not a prefetch or bot request**
    if (userAgent.includes("bot") || userAgent.includes("Headless")) {
        return NextResponse.next();
    }

    // ✅ **Check if request comes from a normal browser navigation**
    const acceptHeader = req.headers.get("accept") || "";
    const isRealPageVisit = acceptHeader.includes("text/html"); // Only track full page loads

    if (isRealPageVisit) {
        fetch(`${req.nextUrl.origin}/api/track-visitor?path=${pathname}`, {
            method: "GET",
            keepalive: true, // Ensure request doesn't block navigation
        }).catch((err) => console.error("Tracking failed:", err));
    }

    return NextResponse.next();
}

// ✅ Apply middleware to all pages
export const config = {
    matcher: "/:path*", // Runs on all pages
};
