import { NextResponse } from "next/server";

export async function POST(req: Request) { 

	return NextResponse.json({
		status: 200,
		message: "Ok"
	})

}