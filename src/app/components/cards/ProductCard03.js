"use client";
import Image from "next/image";
import Link from "next/link";
import { useProducts } from "@/app/hooks/useProducts";
import { useRouter } from "next/navigation";  

export const ProductCard03 = ({ categoryProducts }) => {

	const { setSelectedProductId } = useProducts();
	const router = useRouter();


	return (
		<>
			{categoryProducts.length > 0 ? (
				categoryProducts.map((product) => (
					<Link 
						key={product.id} 
						className="flex h-full"
						href={`/${product.categories[0].slug}/c${product.categories[0].id}/${product.slug}/p${product.id}`}
					>
						<div key={product.id} className="flex flex-col p-2 bg-gray-50/50 border rounded-lg text flex-grow h-full">
							<div className="flex justify-center h-full">
							<picture>
								<source media="(max-width: 767px)" srcSet={`/api/media?url=${product.images[0]?.src}`} />
								<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`/api/media?url=${product.images[0]?.src}`} />
								<img src={`/api/media?url=${product.images[0]?.src}`} alt="Product" />
							</picture>
 
							</div>
							<div className="mt-2 px-4 flex flex-col flex-grow h-full">
								<p>
									<span className="text-lime-600 font-bold text-lg">{product.price} ₴</span>
									{product.sale_price && (
										<span className="text-red-600 text-sm line-through ml-2">{product.regular_price} ₴</span>
									)}
								</p>
								<h3 className="mt-2 text-[14px] text-blue-600 flex-grow">{product.name}</h3>
							</div>
						</div>
					</Link>
				))
			) : (
				<p className="text-gray-500">Товарів не знайдено.</p>
			)}
		</>
	);
};
