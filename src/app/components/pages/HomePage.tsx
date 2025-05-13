"use client";

import React from 'react'
import { useAuth } from '@/app/context/AuthProvider';
import Working from '@/app/components/actions/Working';
import { PopularCategories } from '@/app/components/sections/PopularCategories';
import { Banner, BannerDouble } from "@/app/components/banners";

import BannerSpace from '@/app/assets/banners/banner-space-bg.png';

import BannerBrooklyn from '@/app/assets/banners/brookly01-2.webp';
import BannerSmall from '@/app/assets/banners/banner-small.jpeg';
import BannerSofia from '@/app/assets/banners/sofia-03.webp';
import BannerBedroom5 from '@/app/assets/banners/bedroom-05-gray.webp';
import { ShopByCategory } from '@/app/components/sections/ShopByCategory';

const HomePage = () => {

	const { authLoading } = useAuth();

	if (authLoading) return <Working />;
  return (
    <>
      <section>
        <PopularCategories />
			</section>
			<section>
				<Banner 
					position='left'
					regularPrice='з 10.500 ₴'
					discountPrice='10.064 ₴'
					title="Ліжко-автомобіль  SPACE" 
					subtitle="Для виготовлення даного виробу використовується плита ЛДСП класу «Е1» товщиною 16мм."
					bannerClass="bg-gray-200 sm:py-16 border border-gray-300 shadow-md" 
					bannerImage={BannerSpace} 
					link='/category/lizhka-avtomobili-space/27/'
				/>
			</section>
			<section>
				<Banner 
					position='right'
					regularPrice='7500'
					discountPrice='7300'
					title="Крісло 'Малятко'" 
					subtitle="Для даної моделі використовується тканина Etna «Рогожка» у кольоровій гаммі згідно каталогу." 
					bannerClass="bg-gray-200 sm:py-16 border border-gray-300 shadow-md" 
					bannerImage={BannerSmall} 
					link='/product/krislo-malyatko/242'
				/>
			</section>
			<section>
				<BannerDouble 
					bigBannerPosition='left'
					bannerClass=""

					regularPriceLarge='12000'
					discountPriceLarge='10190'
					titleLarge="Ліжко 'Brooklyn' (Із захисним бортиком)" 
					subtitleLarge="Монтаж ліжка можливий як на лівий та і правий кут, що дуже зручно при розташуванні у квартирі чи будинку" 
					bannerImageLarge={BannerBrooklyn} 
					linkLarge='category/lizhko-brooklyn/29'


					regularPriceSmall='8365'
					bannerImageSmall={BannerSofia} 
					titleSmall="Ліжко 'Sofia'" 
					subtitleSmall="Стильна спальня для затишку" 
					linkSmall='category/lizhko-sofia/32'
										
				/>
			</section>
			<section>
				<Banner 
					position='left'
					regularPrice='з 14783 ₴'
					
					title="BED-ROOM №5 (Білий корпус)" 
					subtitle="Компактне та стильне рішення з білосніжним корпусом і фасадами в палітрі на вибір."
					bannerClass="bg-gray-200 sm:py-16 border border-gray-300 shadow-md" 
					bannerImage={BannerBedroom5} 
					link='/category/bed-room-№5/23'
				/>
			</section>
			<section>
        <ShopByCategory />
		</section>
    </>
  )
}
export default HomePage;