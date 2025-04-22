import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prisma, { Prisma } from "@/lib/prisma";


export async function GET(): Promise<NextResponse> {

	try {
		const variations = await prisma.variation.findMany();

		if(!variations) {

			return NextResponse.json({ 
				status: "fail",
				message: `Товари не знайдено`  ,
			}, {
					status: 200
				 });

		}

		return NextResponse.json({ 
			status: "success",
			message: "Fethced all variations" ,
			data: variations
		}, {
				status: 200
			 });
	} catch(error) {
return NextResponse.json({ 
			status: "fail",
			message: `Bad Request | Error: ${error}` ,
		}, {
				status: 400
			 });
	}
	

}