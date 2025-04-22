import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prisma, { Prisma } from "@/lib/prisma";


export async function GET(): Promise<NextResponse> {

	try {
		const products = await prisma.product.findMany();

		if(!products) {

			return NextResponse.json({ 
				status: "fail",
				message: `Товари не знайдено`  ,
			}, {
					status: 200
				 });

		}

		return NextResponse.json({ 
			status: "success",
			message: "Fethced all products" ,
			data: products
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