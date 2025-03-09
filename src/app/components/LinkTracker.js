"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";

const LinkTracker = () => {
    useEffect(() => {
        const handleClick = (event) => {
            const target = event.target.closest("a"); // Get nearest <a> element
            if (target && target.href) {
                Cookies.set("tracking_referrer", window.location.href, { expires: 1, path: "/" });
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick); // Cleanup
    }, []);

    return null;
};

export default LinkTracker;
