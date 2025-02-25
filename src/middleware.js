import { NextResponse } from "next/server";

export function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const userAgent = req.headers.get("user-agent") || "";

    // ✅ Exclude Next.js static files, assets, and API requests
    if (
        pathname.startsWith("/_next/") ||
        pathname.startsWith("/api/") ||
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

    console.log(`acceptHeader : ${acceptHeader}`);
    console.log(`isRealPageVisit : ${isRealPageVisit}`);

    if (isRealPageVisit) {
        console.log("📌 Server-side visit detected:", pathname);
        fetch(`${req.nextUrl.origin}/api/track-visitor?path=${pathname}`, {
            method: "GET",
            keepalive: true,
        }).catch((err) => console.error("Tracking failed:", err));
    }

    return NextResponse.next();
}

// ✅ Apply middleware to all pages
export const config = {
    matcher: "/:path*",
};
