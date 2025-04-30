import React from 'react'
import FavoritesList from '@/app/components/favorites/FavoritesList'
import { getMetadata } from "@/app/utils/getMetadata";

export const metadata = getMetadata({
	title: "Кошик",
	description: "Перевірте товари у вашому кошику",
});

const page = () => {
	return (
		<FavoritesList />
	)
}

export default page