import { CategoryProductCard02 } from '../cards/CategoryProductCard02'
import { useProducts } from '@/app/hooks/useProducts'
import { Loading } from '../Loading'
import { WarningMessage } from '../WarningMessage'
import { useEffect, useState } from 'react'
import { FallbackCategoryCard } from '../FallbackCategoryCard'

export const PopularCategories = () => {

	const { getFeaturedCategories, getSubCategoriesByParentId, loading } = useProducts();
	const [error, setError] = useState(null);
	const featuredCategories = getFeaturedCategories() || [];

	try {
		if (error) {
			return <WarningMessage message="⚠ An error occurred fetching categories. Please try again later." />;
		}

		return (
			<div className='flex flex-col justify-center   m-auto'>
				<h2 className=''>Найпопулярніші категорії</h2>
				<div className=" flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 ">
					{loading || !featuredCategories?.length ? (
						<div className='flex flex-col justify-center gap-2'>
							<Loading text="categories..." />
							<FallbackCategoryCard />
						</div>
					) : (
						featuredCategories?.length > 0 ? (
							featuredCategories.slice(0, 3).map((category) => {
								const subCategories = getSubCategoriesByParentId(category.id) || [];
								return (
									<CategoryProductCard02 key={category.id} category={category} subCategories={subCategories.slice(0, 3)} />
								)
							})
						) : (
							<WarningMessage message="No categories found" />
						)
					)}
				</div>
			</div>
		);
	} catch (err) {
		console.error("🔥 Error rendering component:", err);
		return <WarningMessage message="⚠ Something went wrong while loading categories." />;
	}
};
