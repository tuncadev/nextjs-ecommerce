import { cookies } from "next/headers";

const STORE_API_URL = process.env.WC_STORE_API_URL;
const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;
const encodedAuth = btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`);
import { headers } from "next/headers";

export async function GET() {

    try {

        const response = await fetch(`${STORE_API_URL}/cart`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${encodedAuth}`,
            },
        });

        if (!response.ok) {
            return new Response(
                JSON.stringify({ message: "Failed to fetch cart" }),
                { status: response.status, headers: { "Content-Type": "application/json" } }
            );
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
