import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";


export async function GET(req: Request): Promise<NextResponse> {
 
		const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			console.warn("⛔ Forbidden host tried to access.  " + req.headers.get("host"));
			return NextResponse.json({ 
				status: "fail",
				message: `Not allowed!, `+   req.headers.get("host"),
			}, {
					status: 500,
					headers: {
						'Content-Type': 'application/json',
					},
					
				 });
		} 

	try {
		const products = await prisma.product.findMany();

		if(!products) {

			return NextResponse.json({ 
				status: "fail",
				message: `Товари не знайдено`  ,
			}, {
					status: 200,
					headers: {
						'Access-Control-Allow-Origin': '*', // Allow all origins (you can restrict later)
						'Content-Type': 'application/json',
					},
					
				 });

		}

		return NextResponse.json({ 
			status: "success",
			message: "Fethced all products" ,
			data: products
		}, {
				status: 200,
				headers: {
					'Access-Control-Allow-Origin': '*', // Allow all origins (you can restrict later)
					'Content-Type': 'application/json',
				},
			 });
	} catch(error) {
return NextResponse.json({ 
			status: "fail",
			message: `Bad Request | Error: ${error}` ,
		}, {
				status: 400,
				headers: {
					'Access-Control-Allow-Origin': '*', // Allow all origins (you can restrict later)
					'Content-Type': 'application/json',
				},
			 });
	}
	

}