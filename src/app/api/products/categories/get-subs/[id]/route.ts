import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	let categoryId = Number(id);
 

  if (isNaN(categoryId)) {
    return NextResponse.json(
      { status: "fail", message: "Invalid or missing category ID", categories: null },
      { status: 400 }
    );
  }

  try {
    const categories = await prisma.category.findMany({
      where: { parent: categoryId },
      orderBy: { name: "asc" },
    });

    if (!categories.length) {
      return NextResponse.json(
        { status: "fail", message: "No subcategories found", categories: [] },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { status: "success", message: "Fetched subcategories", categories },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error fetching categories:", error);
    return NextResponse.json(
      { status: "fail", message: "Failed to fetch categories", categories: null },
      { status: 500 }
    );
  }
}
