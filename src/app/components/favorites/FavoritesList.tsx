"use client";

import { useFavorites } from '@/app/context/FavoritesContext';
import React from 'react'
import { InfoBadge } from '../badges/InfoBadge';
import FavoriteCard from './FavoriteCard';
import Link from 'next/link';
import getProductLink from '@/app/utils/getProductLink';
import { Product } from '@/app/types/products';
import { Variation } from '@/app/types/variations';


const FavoritesList = () => {
	
	const { favorites, handleFavoritesAction } = useFavorites();

	console.log("Favorites", favorites);
	
	const handleFavorites = async (product: Product, variation?: Variation) => {
		if(variation) {
			variation && handleFavoritesAction(product, variation);
		} else {
			product && handleFavoritesAction(product);
		}
		
	};
	

	if (favorites.length <= 0) return (
		<section>
			<InfoBadge title="Нічого не знайдено!" text="Ваш список бажаних товарів порожній. Додайте товари до обраного!" />
		</section>
	);
	return (
		<section>
			<h1 className=''>Списки бажань</h1>
			<div className="">
				<FavoriteCard>
					{(setHoveredName) =>
						favorites.map((favorite) => {
							const isVariation = !!favorite.variation;
							const productName = isVariation ? `${favorite.product.name} | ${favorite.variation.name}` : favorite.product.name;

							let imageSrc = null;
							if (isVariation) {
								const parsedImage = favorite.variation.image
									? JSON.parse(favorite.variation.image)
									: null;
								imageSrc = parsedImage?.src;
							} else {
								const images = Array.isArray(favorite.product.images)
									? favorite.product.images
									: JSON.parse(favorite.product.images || "[]");
								imageSrc = images?.[0]?.src;
							}

							return (
								<div className='relative' key={favorite.id}>
									<i
										onClick={() =>
											handleFavorites(favorite.product, favorite.variation)
										}
										title="Видалити зі списків бажань"
										className="absolute hover:cursor-pointer hover:text-gray-500 text-customRed bg-white rounded-full p-1 text-xs right-2 top-2 fa-solid fa-minus"
									/>

									<Link
										href={getProductLink(favorite.product?.wpId, favorite.product?.slug)}
										className="hover:shadow-md hover:shadow-lime-500"
										onMouseEnter={() => setHoveredName(productName)}
										onMouseLeave={() => setHoveredName("")}
									>
										{imageSrc ? (
											<img
												src={`/api/media?url=${imageSrc}`}
												alt={productName}
												className="w-20 h-20 object-cover rounded-lg shadow-md z-40"
											/>
										) : (
											<div>No image</div>
										)}
									</Link>
								</div>
							);
						})
					}
				</FavoriteCard>
			</div>
		</section>
	)
}


export default FavoritesList