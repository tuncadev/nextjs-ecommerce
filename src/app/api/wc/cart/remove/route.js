import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

const STORE_API_URL = process.env.WC_STORE_API_URL;
const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;
const encodedAuth = btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`);

export async function POST(req) {
		const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			return new Response("403 Forbidden - Access Denied", { 
				status: 403,
				headers: { "Content-Type": "text/plain" }, // ✅ Ensure raw text response
			});
		}
    try {
        const { cartKey } = await req.json();
        if (!cartKey) {
            return new Response(JSON.stringify({ message: "Cart item key is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
				const nonceResponse = await fetch(`${STORE_API_URL}/cart`, {
					method: "GET",
					headers: {
							"Content-Type": "application/json",
					Authorization: `Basic ${encodedAuth}`,	
					},
					
			});

			if (!nonceResponse.ok) {
					return new Response(JSON.stringify({ message: "Failed to fetch nonce" }), {
							status: nonceResponse.status,
							headers: { "Content-Type": "application/json" },
					});
			}

			// Extract the nonce from the response headers
			const nonce = nonceResponse.headers.get("nonce") || null;
        const response = await fetch(`${STORE_API_URL}/cart/remove-item?key=${cartKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${encodedAuth}`,
								Nonce: nonce
            },
						
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ message: "Failed to remove item from cart" }), {
                status: response.status,
                headers: { "Content-Type": "application/json" },
            });
        }

        const cartData = await response.json();
        return new Response(JSON.stringify(cartData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
