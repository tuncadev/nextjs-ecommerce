import { NextResponse } from "next/server";
import { fetchAllProducts } from "@/lib/fetchProducts";
import { fetchVariationsForProduct } from "@/lib/fetchVariations";
import { generateHash } from "@/lib/hashUtils";
import prisma, { Prisma } from "@/lib/prisma";

export async function GET(): Promise<NextResponse> {
  const backendUrl = process.env.BACKEND_UPLOADS_URL as string;

  try {

    const products: any[] = await fetchAllProducts();
    if (!products.length) {
			console.warn("⚠️ No products fetched.");
      return NextResponse.json({ message: "Товари не знайдено" }, { status: 404 });
    }

    let updatedCount = 0;


    for (const product of products) {
      const { related_ids, ...filteredProduct } = product;
      const newHash = generateHash(filteredProduct);

      const existingProduct = await prisma.product.findUnique({
        where: { wpId: product.id },
        select: { id: true, hash: true },
      });

      const productId = existingProduct?.id;
      const skipProductUpdate = existingProduct?.hash === newHash;

      if (!skipProductUpdate) updatedCount++;


      const upsertedProduct = await prisma.product.upsert({
        where: { wpId: product.id },
        update: skipProductUpdate ? {} : {
          name: product.name,
          slug: product.slug,
          hash: newHash,
          permalink: product.permalink,
          dateCreated: new Date(product.date_created),
          dateModified: new Date(product.date_modified),
          type: product.type,
          status: product.status,
          featured: product.featured,
          catalogVisibility: product.catalog_visibility,
          description: product.description,
          shortDescription: product.short_description,
          sku: product.sku || null,
          price: parseFloat(product.price) || 0,
          regularPrice: product.regular_price || null,
          salePrice: product.sale_price || null,
          onSale: product.on_sale,
          purchasable: product.purchasable,
          totalSales: product.total_sales,
          manageStock: product.manage_stock,
          stockQuantity: product.stock_quantity || null,
          weight: product.weight || null,
          dimensions: product.dimensions ? JSON.stringify(product.dimensions) : Prisma.JsonNull,
          shippingRequired: product.shipping_required,
          shippingTaxable: product.shipping_taxable,
          reviewsAllowed: product.reviews_allowed,
          averageRating: parseFloat(product.average_rating) || 0,
          ratingCount: product.rating_count,
          relatedIds: product.related_ids,
          categories: product.categories ? JSON.stringify(product.categories) : Prisma.JsonNull,
          tags: product.tags ? JSON.stringify(product.tags) : Prisma.JsonNull,
          images: product.images
            ? JSON.stringify(product.images.map((img: { src: string }) => ({ ...img, src: img.src.replace(backendUrl, "") })))
            : Prisma.JsonNull,
          attributes: product.attributes ? JSON.stringify(product.attributes) : Prisma.JsonNull,
          variations: product.variations ? JSON.stringify(product.variations) : Prisma.JsonNull,
          metaData: product.meta_data ? JSON.stringify(product.meta_data) : Prisma.JsonNull,
          stockStatus: product.stock_status,
          brands: product.brands ? JSON.stringify(product.brands) : Prisma.JsonNull,
        },
        create: {
          wpId: product.id,
          name: product.name,
          slug: product.slug,
          hash: newHash,
          permalink: product.permalink,
          dateCreated: new Date(product.date_created),
          dateModified: new Date(product.date_modified),
          type: product.type,
          status: product.status,
          featured: product.featured,
          catalogVisibility: product.catalog_visibility,
          description: product.description,
          shortDescription: product.short_description,
          sku: product.sku || null,
          price: parseFloat(product.price) || 0,
          regularPrice: product.regular_price || null,
          salePrice: product.sale_price || null,
          onSale: product.on_sale,
          purchasable: product.purchasable,
          totalSales: product.total_sales,
          manageStock: product.manage_stock,
          stockQuantity: product.stock_quantity || null,
          weight: product.weight || null,
          dimensions: product.dimensions ? JSON.stringify(product.dimensions) : Prisma.JsonNull,
          shippingRequired: product.shipping_required,
          shippingTaxable: product.shipping_taxable,
          reviewsAllowed: product.reviews_allowed,
          averageRating: parseFloat(product.average_rating) || 0,
          ratingCount: product.rating_count,
          relatedIds: product.related_ids,
          categories: product.categories ? JSON.stringify(product.categories) : Prisma.JsonNull,
          tags: product.tags ? JSON.stringify(product.tags) : Prisma.JsonNull,
          images: product.images
            ? JSON.stringify(product.images.map((img: { src: string }) => ({ ...img, src: img.src.replace(backendUrl, "") })))
            : Prisma.JsonNull,
          attributes: product.attributes ? JSON.stringify(product.attributes) : Prisma.JsonNull,
          variations: product.variations ? JSON.stringify(product.variations) : Prisma.JsonNull,
          metaData: product.meta_data ? JSON.stringify(product.meta_data) : Prisma.JsonNull,
          stockStatus: product.stock_status,
          brands: product.brands ? JSON.stringify(product.brands) : Prisma.JsonNull,
        },
      });
			
      // Fetch & sync variations if any
      if (product.variations?.length) {
        const variations = await fetchVariationsForProduct(product.id, product.variations);

        for (const variation of variations) {
          const { id: wpId, ...rest } = variation;
          const hash = generateHash(rest);

          const existingVariation = await prisma.variation.findUnique({ where: { wpId } });

          if (existingVariation?.hash === hash) continue;

          await prisma.variation.upsert({
            where: { wpId },
            update: {
              productId: upsertedProduct.id,
              name: variation.name,
              hash,
              permalink: variation.permalink,
              dateCreated: new Date(variation.date_created),
              dateModified: new Date(variation.date_modified),
              status: variation.status,
              description: variation.description,
              shortDescription: variation.short_description,
              sku: variation.sku || null,
              price: parseFloat(variation.price) || 0,
              regularPrice: variation.regular_price || null,
              salePrice: variation.sale_price || null,
							image: variation.image
							? JSON.stringify({
									...variation.image,
									src: variation.image.src.replace(backendUrl, ""),
								})
							: Prisma.JsonNull,
							
              attributes: variation.attributes ? JSON.stringify(variation.attributes) : Prisma.JsonNull,
            },
            create: {
              wpId,
              productId: upsertedProduct.id,
              name: variation.name,
              hash,
              permalink: variation.permalink,
              dateCreated: new Date(variation.date_created),
              dateModified: new Date(variation.date_modified),
              status: variation.status,
              description: variation.description,
              shortDescription: variation.short_description,
              sku: variation.sku || null,
              price: parseFloat(variation.price) || 0,
              regularPrice: variation.regular_price || null,
              salePrice: variation.sale_price || null,
              image: variation.image
							? JSON.stringify({
									...variation.image,
									src: variation.image.src.replace(backendUrl, ""),
								})
							: Prisma.JsonNull,
              attributes: variation.attributes ? JSON.stringify(variation.attributes) : Prisma.JsonNull,
            },
          });
        }

      };

    }
		
			// Cleanup deleted products
			const wpIds = products.map((p) => p.id);
			const deleted = await prisma.product.deleteMany({
				where: { wpId: { notIn: wpIds } },
			});
			if (deleted.count > 0) {

			}
    return NextResponse.json(
      updatedCount > 0
        ? { message: `✅ Updated ${updatedCount} products.` }
        : { message: "No updates needed." },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error syncing products:", error);
    return NextResponse.json(
      { message: "Error syncing products.", error: error instanceof Error ? error.message : "Невідома помилка" },
      { status: 500 }
    );
  }
}
