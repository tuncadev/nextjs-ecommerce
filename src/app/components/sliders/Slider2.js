"use client";
import { ProductCard03 } from '../cards/ProductCard03'
import { useProducts } from "../../hooks/useProducts";
import { Loading } from '../Loading';
import { FallbackProductCard } from '../callbackProductCard';

export const Slider2 = ({categorySlug}) => {
	const { getProductsByCategorySlug, loading } = useProducts();
	const categoryProducts = getProductsByCategorySlug(categorySlug);

	return (
		<>
		<div className={`${loading ? "flex justify-center text-center" : "grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4 container"}`} >
			{loading  ? (
				<div className='flex flex-col justify-center gap-2'>
					<Loading text="products..." />
					<FallbackProductCard />
				</div>
			) : (
				(categoryProducts.length > 0) ? (
					<ProductCard03 categoryProducts={categoryProducts.slice(0, 5)} />
				) : (
					<p className="text-gray-500">Немає товарів у цій категорії.</p>
				)
			)}
		</div>
		</>
	)
}
