import React from 'react'

import  CategoryProductCard01  from "@/app/components/cards/CategoryProductCard01";
import { Category } from '@/app/types/categories';

interface Slider03Props {
	categories: Category[];
}
const Slider03: React.FC<Slider03Props> = ({ categories }) => {
 
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

export default Slider03;