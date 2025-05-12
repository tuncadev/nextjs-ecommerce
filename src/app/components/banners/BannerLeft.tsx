import React from 'react'
import Image from 'next/image'
import { Button } from 'flowbite-react';

type BannerLeftProps = {
  bannerClass?: string;
  bannerImage: { src: string };
  title: string ;
	text: string ;
};


export const BannerLeft: React.FC<BannerLeftProps> = ({bannerClass, bannerImage, title, text}) => {

	return (
		<div className={`${bannerClass} relative banner-left flex flex-col sm:flex-row  justify-start`}  >
			<div 
				className="hidden lg:block absolute w-full h-full top-0 left-0 bg-no-repeat bg-right " 
				style={{ backgroundImage: `url('${bannerImage.src}')` }}>
			</div>
			<div className=" md:pl-20 sm:m-auto md:m-0">
				<div className="banner-left-content sm:ml-16 flex flex-col ">
					<h3 className='text-2xl text-center font-bold py-2'>
						{title}
					</h3>
					<p className='text-center'>
						{text}	
					</p>
				</div>
				<div className="">
					<Image 
						src={bannerImage.src}
						width={400}
						height={400}
						alt='FABRIC BED DISCOUNT'
						className='lg:hidden  md:absolute sm:block m-auto md:right-10 md:top-10'
					/>
				</div>
				<div className="banner-left-price m-auto text-center   py-4 px-4 flex flex-col">
					<span className='price-discount-gray'> $900</span>
					<span className='price-green text-2xl'>$219</span>
					<Button  pill className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800">
						Купуйте зараз
					</Button>
				</div>
			</div>
		</div>
	)
}
