
"use client";

import { PopularCategories } from "./components/sections/PopularCategories"; 
import { DealsOfTheDay } from "./components/sections/DealsOfTheDay";
import { ShopByCategory } from "./components/sections/ShopByCategory";
import { BannerLeft, BannerRight, BannerDouble } from "./components/banners";

import BannerSpace from '@/app/assets/banners/banner-space-bg.png';
import BannerLarge from '@/app/assets/banners/banner-large.jpg';


 
export default function Home() {
 



    return (
			<>			
				<section className="container">
					<PopularCategories />
				</section>

				<section className="container">
					<BannerLeft title="Кровать-машина  SPACE" text="Ох какая хорошая кровать" bannerClass="bg-gray-200 sm:py-16 border border-gray-300 shadow-md" bannerImage={BannerSpace} />
				</section>
 
				<section className="container">
					<BannerDouble bannerClass="" bannerImageSmall={BannerSpace} bannerImageLarge={BannerLarge} />
				</section>

				<section className="container">
					<ShopByCategory />
				</section>
				
				<section className="container">
					<BannerRight  bannerClass="bg-sky-200 py-16 border border-gray-300 shadow-md" bannerImage={BannerSpace} />
				</section>

				<section className="container">
					<DealsOfTheDay />
				</section>
			</>
    );
}
