import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prisma, { Prisma } from "@/lib/prisma";


export async function GET(): Promise<NextResponse> {

	try {
		const categories = await prisma.category.findMany();

		if(!categories) {

			return NextResponse.json({ 
				status: "fail",
				message: `No categories fetched.`  ,
			}, {
					status: 200
				 });

		}

		return NextResponse.json({ 
			status: "success",
			message: "Fethced all categories" ,
			data: categories
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