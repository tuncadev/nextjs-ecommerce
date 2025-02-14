import React from 'react'

import { CategoryProductCard01 } from "../cards/CategoryProductCard01";

export const Slider3 = ({categories}) => {
 
	return (
		<>
			<div  className="grid md:grid-cols-3 grid-col-2 lg:grid-cols-6 w-full gap-4 mt-4">
				{categories.map((category)=> (
					category.count > 0 && (
						<CategoryProductCard01 key={category.id} category={category} />
					)
				))}
				
			</div>
		</>
		
	)
}
