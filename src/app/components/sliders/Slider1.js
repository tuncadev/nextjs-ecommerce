import React from 'react'
import { ProductCard } from "../cards/ProductCard";

export const Slider1 = () => {
	return (
		<>
		<div className='hidden md:grid grid-cols-2 gap-4 max-w-[80%] m-auto'>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
 
		</>
	)
}
