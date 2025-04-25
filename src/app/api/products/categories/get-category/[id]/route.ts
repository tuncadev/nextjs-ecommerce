import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(

  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
	let categoryId = Number(id);

  if (isNaN(categoryId)) {
    return NextResponse.json(
      { success: false, message: "Invalid category ID" },
      { status: 400 }
    );
  }

  try {
    const category = await prisma.category.findFirst({
      where: { wpId: categoryId },
    });

    if (!category) {
      return NextResponse.json(
        { success: false, message: "Категорію не знайдено" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, category },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      { success: false, message: "Внутрішня помилка сервера" },
      { status: 500 }
    );
  }
}
