"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function usePageTracking() {
    const pathname = usePathname(); // Get the current page route

    useEffect(() => {
        if (!pathname) return; // Ensure pathname exists

        // ✅ Track each page change
        fetch(`/api/track-visitor?path=${pathname}`, { method: "GET", keepalive: true })
            .catch((err) => console.error("Client-side tracking failed:", err));

    }, [pathname]); // Runs every time the route changes
}
