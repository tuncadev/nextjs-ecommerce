"use client"; // ✅ Mark as client component

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TrackingProvider() {
    const pathname = usePathname(); // Get current route

    useEffect(() => {
        if (!pathname) return; // Ensure pathname exists

        // ✅ Track each page change
        fetch(`/api/track-visitor?path=${pathname}`, { method: "GET", keepalive: true })
            .catch((err) => console.error("Client-side tracking failed:", err));

    }, [pathname]); // Runs every time the route changes

    return null; // No UI needed, just runs effect
}
