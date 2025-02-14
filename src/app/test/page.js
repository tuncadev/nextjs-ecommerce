"use client";
import { useProducts } from "@/app/hooks/useProducts";
import { useParams } from "next/navigation";
import { ProductCard01 } from "@/app/components/cards/ProductCard01";
import { Loading } from "@/app/components/Loading";

export default function CategoryPage() {
		const { products, getCategoryById, getProductsByCategoryId, loading } = useProducts();
		const params = useParams();

 		if (!params?.id) return <p>Loading...</p>;
		const categoryProducts = getProductsByCategoryId(params.id);
		const category = getCategoryById(params.id);
		return (
			<section className="container mx-auto px-4 py-6">
				{loading ? (
					<Loading text="products" />
				) : categoryProducts.length > 0 ? (
					<>
						<h1 className="sm:text-3xl font-bold text-sky-900 dark:text-white sm:mb-6 py-4">
						<i className="fa-brands fa-product-hunt text-amber-500 mr-2"></i>{`${categoryProducts.length} ${categoryProducts.length === 1 ? "товар" : (categoryProducts.length > 1 && categoryProducts.length < 5 ? "товари" : "товарів")} у категорії `} <i className="fa-solid fa-table-cells-large mx-2 text-pink-700"></i> {category.name}

						</h1>

						<ProductCard01 categoryProducts={categoryProducts} />
					</>
				) : (
					<p className="text-gray-500">No products found in this category.</p>
				)}
			</section>
		);
}
