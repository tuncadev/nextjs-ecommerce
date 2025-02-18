"use client";

import { useParams } from 'next/navigation';
import { useProducts } from '@/app/hooks/useProducts';
import { ProductCard01 } from '@/app/components/cards/ProductCard01';
import { Loading } from '@/app/components/Loading';
import { WarningMessage } from '@/app/components/WarningMessage';

export default function SingleCategory() {
    const params = useParams();
  
		const { loading, categoriesLoading, categories, getCategoryBySlug, getProductsByCategoryId } = useProducts();
    
     	if (loading || categoriesLoading || categories.length === 0) {
			return <Loading text="category..." />; // 🛑 Wait until categories are fetched
		}
	
	//  Get category after ensuring categories are loaded
		const categorySlug = decodeURIComponent(params.categorySlug).toLowerCase();
		const category = getCategoryBySlug(categorySlug);
		
		if (!category) {
				return <Loading text="category details..." />; // 🛑 This should only happen if the category doesn't exist
		}

    const categoryProducts = category.id ? getProductsByCategoryId(category.id) : null;

    if (!categoryProducts || categoryProducts.length === 0) {
			return <WarningMessage message="No products found" />;
		}	

    return (
		<>
        <section className="container mx-auto px-4 py-6">
            <h1 className="sm:text-3xl font-bold text-sky-900 dark:text-white sm:mb-6 py-4">
                <i className="fa-brands fa-product-hunt text-amber-500 mr-2"></i>
                {`${categoryProducts.length} ${
                    categoryProducts.length === 1
                        ? "товар"
                        : categoryProducts.length < 5
                        ? "товари"
                        : "товарів"
                } у категорії `}
                <i className="fa-solid fa-table-cells-large mx-2 text-pink-700"></i>
                {category.name}
            </h1>
						<div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
							{categoryProducts.map((product) => (
								<ProductCard01 key={product.id} product={product} />
							))}
            </div>
        </section>
				</>
    );
}
