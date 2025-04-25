import { NextResponse } from "next/server";

import { fetchAllCategories } from "@/lib/fetchCategories";
import prisma from "@/lib/prisma";


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