import React from 'react'

type VariationCardPriceType = {
	price: number;
}

const VariationCardPrice = ({price}: VariationCardPriceType) => {

	return (
		<h5 className="text-lg text-right font-semibold tracking-tight line-clamp-2 mt-2 pl-1">		
		<span className=" text-gray-900">
		{price ? `${price.toLocaleString("uk-UA")} ₴` : "Ціна недоступна"}
		</span>
	</h5>
)
}

export default VariationCardPrice