import { prisma } from "@/lib/prisma";

export async function syncGuestFavoritesToUser(userId: string, sessionToken: string) {
	const guestFavorites = await prisma.favorite.findMany({
		where: { sessionToken },
	});

	for (const fav of guestFavorites) {
		await prisma.favorite.upsert({
			where: {
				userId_productId_variationId: {
					userId,
					productId: fav.productId,
					variationId: (fav.variationId ?? null) as any,
				},
			},
			update: {},
			create: {
				userId,
				productId: fav.productId,
				variationId: fav.variationId ?? null,
			},
		});
		
	}

	await prisma.favorite.deleteMany({
		where: { sessionToken },
	});
}
