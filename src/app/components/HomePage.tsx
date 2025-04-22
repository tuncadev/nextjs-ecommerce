"use client";

import React from 'react'
import { useAuth } from '@/app/context/AuthProvider';
import Working from '@/app/components/actions/Working';
import { PopularCategories } from '@/app/components/sections/PopularCategories';
import { BannerLeft, BannerRight, BannerDouble } from "@/app/components/banners";

import BannerSpace from '@/app/assets/banners/banner-space-bg.png';
import BannerLarge from '@/app/assets/banners/banner-large.jpg';
import { ShopByCategory } from './sections/ShopByCategory';

const HomePage = () => {

	const {loading } = useAuth();

	if (loading) return <Working />;
  return (
    <>
      <section className="container">
        <PopularCategories />
			</section>
			<section className="container">
				<BannerLeft 
					title="Кровать-машина  SPACE" 
					text="Ох какая хорошая кровать" 
					bannerClass="bg-gray-200 sm:py-16 border border-gray-300 shadow-md" 
					bannerImage={BannerSpace} 
				/>
			</section>

			<section className="container">
				<BannerDouble 
					bannerClass=""
					bannerImageSmall={BannerSpace} 
					bannerImageLarge={BannerLarge} 
				/>
			</section>
			<section className="container">
        <ShopByCategory />
		</section>
    </>
  )
}
export default HomePage;