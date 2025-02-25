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
					headers: { "Content-Type": "text/plain" }, 
			});
	}
    try {
        const { productId, itemKey, newQuantity } = await req.json();
        if (!productId || !itemKey || !newQuantity) {
            return new Response(JSON.stringify({ message: "Product ID, Item Key, and Quantity are required" }), {
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
        // Remove the existing item first
        const removeResponse = await fetch(`${STORE_API_URL}/cart/remove-item?key=${itemKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${encodedAuth}`,
								Nonce: nonce
            },
						
        });

        if (!removeResponse.ok) {

            return new Response(JSON.stringify({ message: "Failed to remove item before update" }), {
                status: removeResponse.status,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Re-add item with new quantity
        const addResponse = await fetch(`${STORE_API_URL}/cart/add-item?id=${productId}&quantity=${newQuantity}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${encodedAuth}`,
								Nonce: nonce
            },
        });

        if (!addResponse.ok) {

            return new Response(JSON.stringify({ message: "Failed to update cart item quantity" }), {
                status: addResponse.status,
                headers: { "Content-Type": "application/json" },
            });
        }

        const cartData = await addResponse.json();
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
