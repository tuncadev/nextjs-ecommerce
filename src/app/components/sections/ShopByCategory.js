import { Loading } from "../Loading";
import { Carousel } from "flowbite-react";
import { Slider3 } from "../sliders/Slider3";
import { useProducts } from "@/app/hooks/useProducts";
import { FallbackProductCard } from "../callbackProductCard";

export const ShopByCategory = () => {
	const { listAllCategories, loading } = useProducts();
	const categories = listAllCategories() || [];

	//  Filter out categories with 0 products
	const filteredCategories = categories.filter(category => category.count > 0);

	//  Only chunk if more than 6 categories exist
	const chunks = filteredCategories.length > 6 
	  ? [...Array(Math.ceil(filteredCategories.length / 6))].map((_, index) =>
	      filteredCategories.slice(index * 6, index * 6 + 6)
	    )
	  : [filteredCategories]; // Show all categories in one slide if 6 or fewer

	return (
		<div  className="py-6 border-y border-y-gray-300 my-4">
			<h2 className="">Shop by Category</h2>
			<div>
				{loading ? (
					<div className='flex flex-col justify-center gap-2'>
						<Loading text="categories..." />
						<FallbackProductCard />
					</div>
				) : (
					chunks.length > 6 ? (
						<Carousel 
							className="h-96 carousel px-4" 
							indicators={false}
							slideInterval={5000}
						>
							{chunks.map((chunk, index) => (
								<Slider3 key={index} categories={chunk} />
							))}
						</Carousel>
					) : (
						chunks.map((chunk, index) => (
							<Slider3 key={index} categories={chunk} />
						))
					)
					
				)}
			</div>
		</div>
	);
};
