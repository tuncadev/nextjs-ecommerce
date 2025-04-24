import { prisma } from "@/lib/prisma";

export async function syncGuestFavoritesToUser(userId: string, sessionToken: string) {
	const guestFavorites = await prisma.favorite.findMany({
		where: { sessionToken },
	});

	for (const fav of guestFavorites) {
		await prisma.favorite.upsert({
			where: {
				userId_productId: {
					userId,
					productId: fav.productId,
				},
			},
			update: {},
			create: {
				userId,
				productId: fav.productId,
			},
		});
	}

	// optionally: delete guest entries
	await prisma.favorite.deleteMany({
		where: { sessionToken },
	});
}
