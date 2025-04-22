import { NextResponse } from "next/server";
import { fetchAllCategories } from "@/lib/fetchCategories";
import prisma, { Prisma } from "@/lib/prisma";
import { generateHash } from "@/lib/hashUtils";

export async function GET(): Promise<NextResponse> {
  const backendUrl = process.env.BACKEND_UPLOADS_URL as string;

  try {

    const categories: any[] = await fetchAllCategories();

    if (!categories.length) {
      console.warn("⚠️ No categories fetched.");
      return NextResponse.json({ message: "No categories fetched." }, { status: 404 });
    }

 
    let updatedCount = 0;

    for (const category of categories) {
      const newHash = generateHash(category);

      const existingCategory = await prisma.category.findUnique({
        where: { wpId: category.id },
        select: { hash: true },
      });

      if (existingCategory?.hash === newHash) {
        continue;
      }

      updatedCount++;


      await prisma.category.upsert({
        where: { wpId: category.id },
        update: {
          name: category.name,
          slug: category.slug,
          hash: newHash,
          parent: category.parent || null,
          description: category.description || "",
          display: category.display,
          image: category.image
            ? JSON.stringify({
                ...category.image,
                src: category.image.src.replace(backendUrl, ""),
              })
            : Prisma.JsonNull,
          menuOrder: category.menu_order,
          count: category.count,
          featured: category.featured,
        },
        create: {
          wpId: category.id,
          name: category.name,
          slug: category.slug,
          hash: newHash,
          parent: category.parent || null,
          description: category.description || "",
          display: category.display,
          image: category.image
            ? JSON.stringify({
                ...category.image,
                src: category.image.src.replace(backendUrl, ""),
              })
            : Prisma.JsonNull,
          menuOrder: category.menu_order,
          count: category.count,
          featured: category.featured,
        },
      });


    }

		// Cleanup deleted categories
		const wpIds = categories.map((cat) => cat.id);
		const deleted = await prisma.category.deleteMany({
			where: { wpId: { notIn: wpIds } },
		});
		if (deleted.count > 0) {

		}


    return NextResponse.json(
      updatedCount > 0
        ? { message: `✅ Updated ${updatedCount} categories.` }
        : { message: "No updates needed." },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error syncing categories:", error);
    return NextResponse.json(
      {
        message: "Error syncing categories.",
        error: error instanceof Error ? error.message : "Невідома помилка",
      },
      { status: 500 }
    );
  }
}
