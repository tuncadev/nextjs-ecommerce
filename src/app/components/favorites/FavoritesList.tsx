"use client";

import { useFavorites } from '@/app/context/FavoritesContext';
import React from 'react'
import { InfoBadge } from '../badges/InfoBadge';
import FavoriteCard from './FavoriteCard';


const FavoritesList = () => {
	
	const { favorites } = useFavorites();
	console.log("favorites", favorites);
	if (favorites.length <= 0) return (
		<section className="container">
			<InfoBadge title="Нічого не знайдено!" text="Ваш список бажаних товарів порожній. Додайте товари до обраного!" />
		</section>
	);
	return (
		<section>
			<h1 className=''>Списки бажань</h1>
			<div className="">
				<FavoriteCard>
					{favorites.map((favorite) => {
						let images = [];

						try {
							images = typeof favorite.product.images === "string"
								? JSON.parse(favorite.product.images)
								: favorite.product.images;
						} catch (error) {
							console.error("Error parsing product images", error);
						}

						const firstImage = images?.[0]; 

						return (
							<span key={favorite.product.id}>
								{firstImage ? (
									<img src={`/api/media?url=${firstImage.src}`} alt={firstImage.alt || favorite.product.name} className="w-20 h-20 object-cover rounded-lg shadow-md" />
								) : (
									<div>No image</div>
								)}
							</span>
						);
					})}
				</FavoriteCard>
				
			</div>

		</section>
	)
}

export default FavoritesList