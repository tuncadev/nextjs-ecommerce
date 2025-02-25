import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";
 
export async function GET(req) {
		const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			return new Response("403 Forbidden - Access Denied", { 
					status: 403,
					headers: { "Content-Type": "text/plain" }, 
			});
	}
    try {

        const API_URL = process.env.WP_API_PRODUCTS_URL;
        const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
        const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;
        const AUTH_PARAMS = `consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;

 
        const res = await fetch(`${API_URL}?per_page=100&${AUTH_PARAMS}`);

        if (!res.ok) throw new Error("Failed to fetch products");

        return NextResponse.json({ products: data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
