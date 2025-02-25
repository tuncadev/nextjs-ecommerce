import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

const API_URL = process.env.WP_API_PRODUCTS_URL;
const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;

export async function GET(req) {
		const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			return new Response("403 Forbidden - Access Denied", { 
					status: 403,
					headers: { "Content-Type": "text/plain" }, 
			});
	}
    try {
        const pathnameParts = req.nextUrl.pathname.split("/"); 
        const productId = pathnameParts[pathnameParts.length - 1]; // ✅ Extract ID from URL

        const AUTH_PARAMS = `consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
        const productRes = await fetch(`${API_URL}/${productId}?${AUTH_PARAMS}`);

        if (!productRes.ok) {
            throw new Error("Failed to fetch product details");
        }

        const product = await productRes.json();
        return NextResponse.json({ product });
    } catch (error) {
        console.error("❌ Error fetching product details:", error);
        return NextResponse.json({ error: "Failed to fetch product details" }, { status: 500 });
    }
}
