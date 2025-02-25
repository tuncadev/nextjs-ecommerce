import { NextResponse } from "next/server";
import { getAllVisitors, getAllPages } from "@/lib/redis-track";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

export async function GET(req) {
		const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			return new Response("403 Forbidden - Access Denied", { 
					status: 403,
					headers: { "Content-Type": "text/plain" }, // ✅ Ensure raw text response
			});
		}
    try {
        const visitors = await getAllVisitors() || [];
				const pages = await getAllPages() || [];
        return NextResponse.json({ 
					message: "Visitors retrieved", 
					visitors: visitors,
					pages: pages
				}, { 
					status: 200 
				});
    } catch (error) {
        console.error("❌ Error fetching visitors:", error);
        return NextResponse.json({ error: "Failed to retrieve visitors" }, { status: 500 });
    }
}
