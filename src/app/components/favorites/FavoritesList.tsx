"use client";

import { useFavorites } from '@/app/context/FavoritesContext';
import React from 'react'
import { InfoBadge } from '../badges/InfoBadge';
import FavoriteCard from './FavoriteCard';
import Link from 'next/link';
import getProductLink from '@/app/utils/getProductLink';


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
							<Link
							 	key={favorite.id} href={getProductLink(favorite.product?.wpId, favorite.product?.slug)}
								className=' hover:shadow-md hover:shadow-lime-500'
							 >
								<span key={favorite.product.id}>
									{firstImage ? (
										<img src={`/api/media?url=${firstImage.src}`} alt={firstImage.alt || favorite.product.name} className="w-20 h-20 object-cover rounded-lg shadow-md" />
									) : (
										<div>No image</div>
									)}
								</span>
							</Link>
						);
					})}
				</FavoriteCard>
				
			</div>

		</section>
	)
}


export default FavoritesList