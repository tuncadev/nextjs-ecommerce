import { cookies } from "next/headers";

const STORE_API_URL = process.env.WC_STORE_API_URL;
const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;
const encodedAuth = btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`);

export async function POST(req) {
    try {
        const { productId, quantity } = await req.json();
        if (!productId || !quantity) {
            return new Response(JSON.stringify({ message: "Product ID and quantity are required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const response = await fetch(`${STORE_API_URL}/cart/add-item?id=${productId}&quantity=${quantity}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${encodedAuth}`,
            },
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ message: "Failed to add item to cart" }), {
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
