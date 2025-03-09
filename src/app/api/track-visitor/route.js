import { NextResponse } from "next/server";
import { saveVisitor, getVisitor, savePage, getPage } from "@/lib/sqlite-track";
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
			const { searchParams } = new URL(req.url);
			const path = searchParams.get("path") || "unknown"; // Page path

			const visitorIp = req.headers.get("x-forwarded-for") || "unknown"; // Real visitor IP
			const userAgent = req.headers.get("user-agent") || "unknown"; // Real User-Agent
			let referrer = req.cookies.get("tracking_referrer")?.value || "tracker direct";
			const visitTimestamp = new Date().toISOString();

			let visitorData = getVisitor(visitorIp);
			if (visitorData) {
					visitorData.visit_count += 1;
					visitorData.referrer = referrer,
					visitorData.timestamp = visitTimestamp;
			} else {
					visitorData = {
							id: visitorIp,
							ip: visitorIp,
							userAgent,
							referrer,
							timestamp: visitTimestamp,
							visit_count: 1,
					};
			}

			saveVisitor(visitorIp, visitorData);

			let pageVisits = getPage(path);

			if (pageVisits && pageVisits.visitor_id === visitorIp) {
					pageVisits.visit_count += 1;
					pageVisits.timestamp = visitTimestamp;
			} else {
					pageVisits = {
							url: path,
							visitor_id: visitorIp,
							ip: visitorIp,
							referrer,
							timestamp: visitTimestamp,
							visit_count: 1,
					};
			}

			savePage(path, visitorIp, pageVisits);

			return NextResponse.json({ 
					message: "Visitor & Page Tracked", 
					visitor: visitorData, 
					page: path 
			}, { status: 200 });

	} catch (error) {
			console.error("❌ Error tracking visitor:", error);
			return NextResponse.json({ error: "Failed to track visitor" }, { status: 500 });
	}
}
