import FavoritesList from '@/app/components/favorites/FavoritesList'
import React from 'react'
import { getMetadata } from "@/app/utils/getMetadata";

export const metadata = getMetadata({
	title: "Список бажаних товарів",
	description: "Перегляньте товари, які ви додали до обраного.",
});

const page = () => {
	return (
		<FavoritesList />
	)
}

export default page