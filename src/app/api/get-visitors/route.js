import { NextResponse } from "next/server";
import { getAllVisitors, getAllPages } from "@/lib/redis-track";

export async function GET() {
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
