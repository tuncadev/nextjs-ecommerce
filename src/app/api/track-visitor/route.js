import { NextResponse } from "next/server";
import { saveVisitorToRedis, getVisitorFromRedis, getPageFromRedis, savePageToRedis } from "@/lib/redis-track";

/**
 * Tracks a visitor by checking their IP and user agent.
 */
export async function GET(req) {
    try {
 

        const { searchParams } = new URL(req.url);
        const path = searchParams.get("path") || "unknown"; // Page path

        const visitorIp = req.headers.get("x-forwarded-for") || "unknown"; // Unique visitor key
        const userAgent = req.headers.get("user-agent") || "unknown";
        const referrer = req.headers.get("referer") || "direct";
        const visitTimestamp = new Date().toISOString();

        /*** 🔹 Fetch Visitor Data ***/
        let visitorData = await getVisitorFromRedis(visitorIp);

        if (visitorData) {
            // ✅ Visitor already exists, update their last visit
 
            visitorData.visit_count += 1;
            visitorData.timestamp = visitTimestamp;
        } else {
            // 🆕 First time visitor
            visitorData = {
                id: visitorIp,
                ip: visitorIp,
                userAgent,
                referrer,
                timestamp: visitTimestamp,
                visit_count: 1,
            };
        }

        // ✅ Save visitor data to Redis
        await saveVisitorToRedis(visitorIp, visitorData);

        /*** 🔹 Track Page-Specific Visits ***/
        const pageKey = `${path}`;
        let pageVisits = await getPageFromRedis(pageKey) || [];

        // 🔎 Check if visitor exists in page visits
        const existingVisitorIndex = pageVisits.findIndex((v) => v.id === visitorIp);

        if (existingVisitorIndex !== -1) {
            // ✅ Increment visit count if user already visited this page
            pageVisits[existingVisitorIndex].visit_count += 1;
            pageVisits[existingVisitorIndex].timestamp = visitTimestamp;
        } else {
            // 🆕 First time visiting this page
            pageVisits.push({
                id: visitorIp,
                ip: visitorIp,
                referrer,
                timestamp: visitTimestamp,
                visit_count: 1,
            });
        }

        // ✅ Save updated page visit log
        await savePageToRedis(pageKey, pageVisits);

        return NextResponse.json({ message: "Visitor & Page Tracked", visitor: visitorData, pageKey }, { status: 200 });

    } catch (error) {
        console.error("❌ Error tracking visitor:", error);
        return NextResponse.json({ error: "Failed to track visitor" }, { status: 500 });
    }
}
