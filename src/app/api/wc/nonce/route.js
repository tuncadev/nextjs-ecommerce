import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

const STORE_API_URL = process.env.WC_STORE_API_URL;
const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;
const encodedAuth = btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`);


export async function GET() {
		const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			return new Response("403 Forbidden - Access Denied", { 
					status: 403,
					headers: { "Content-Type": "text/plain" }, // ✅ Ensure raw text response
			});
	}

    try {

        const response = await fetch(`${STORE_API_URL}/cart`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
						Authorization: `Basic ${encodedAuth}`,	
            },
						
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ message: "Failed to fetch nonce" }), {
                status: response.status,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Extract the nonce from the response headers
        const nonce = response.headers.get("nonce") || null;

        return new Response(JSON.stringify({ nonce }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Nonce Fetch Error:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
