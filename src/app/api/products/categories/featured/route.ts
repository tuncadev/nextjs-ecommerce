import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { fetchAllCategories } from "@/lib/fetchCategories";
import prisma, { Prisma } from "@/lib/prisma";
import { generateHash } from "@/lib/hashUtils";

export async function GET(): Promise<NextResponse> {

	try {
		const futuredCategories = await prisma.category.findMany({
			where: { featured: true },
		});

		if(!fetchAllCategories) {

			return NextResponse.json({ 
				status: "fail",
				message: `No categories fetched.`  ,
				data: futuredCategories
			}, {
					status: 200
				 });

		}

		return NextResponse.json({ 
			status: "success",
			message: "No categories fetched." ,
			data: futuredCategories
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