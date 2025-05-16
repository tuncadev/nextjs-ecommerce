import React from 'react'

type ProductCardPriceType = {
	variationsCount: number;
	productPrice: number;
	min: number;
	max: number;
}

const ProductCardPrice = ({variationsCount, productPrice, min, max}: ProductCardPriceType) => {

	return (
		<h5 className="text-sm font-semibold tracking-tight line-clamp-2  pl-1">
			{variationsCount > 0 ? (
				<span className=" text-gray-900">
					{min === max ? `${min} ₴` : `${min} ₴ – ${max} ₴`} 
				</span>
			) : (
				<span className=" text-gray-900">
					{productPrice ? `${productPrice} ₴` : "Ціна недоступна "}
				</span>
			)}
		</h5>
)
}

export default ProductCardPrice