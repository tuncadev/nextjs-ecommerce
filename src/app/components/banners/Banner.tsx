import { Button } from "flowbite-react";
import React from "react"
import Image from 'next/image'
import Link from "next/link";


type BannerProps = {
	position?: string,
	bannerClass?: string,
	bannerImage: { src: string };
	regularPrice: string,
	discountPrice?: string,
	title?: string,
	subtitle?: string
	buttonText?: string,
	link?: string,
}

export const Banner: React.FC<BannerProps>  = (
	{
		position, 
		bannerClass, 
		bannerImage, 
		regularPrice, 
		discountPrice, 
		title, 
		subtitle, 
		buttonText,
		link
	}
) => {
	
  if(!position) return;
	const BannerLink = link || "#"
	return (
		position === "left" ? (
		<div className={`${bannerClass} relative banner-left flex flex-col sm:flex-row  justify-start`}  >
			<div 
				className="hidden lg:block absolute w-1/2 overflow-hidden bg-cover h-full top-0 right-0 bg-no-repeat bg-right  before:absolute before:inset-y-0 before:left-0 before:w-1/6 before:bg-gradient-to-r before:from-gray-200 before:to-transparent"
				style={{ backgroundImage: `url('${bannerImage.src}')` }}>
			</div>
			<div className=" md:pl-20 sm:m-auto md:m-0">
				<div className="banner-left-content sm:ml-16 flex flex-col ">
					<h3 className='text-2xl text-center font-bold py-2'>
						{title}
					</h3>
					<p className='text-center'>
						{subtitle}	
					</p>
				</div>
				<div className="">
					<Image 
						src={bannerImage.src}
						width={400}
						height={400}
						alt={`${subtitle || title}`}
						className='lg:hidden  md:absolute sm:block m-auto md:right-10 md:top-10'
					/>
				</div>
				<div className="banner-left-price m-auto text-center   py-4 px-4 flex flex-col">
					<span className={`text-3xl ${discountPrice ? "price-gray line-through" : "price-green"}`}>
						{regularPrice}
					</span>
					{discountPrice && (
						<span className='price-green text-2xl'>
							{discountPrice}
						</span>
					)}
					<Button  as={Link} href={BannerLink}  pill className=" font-semibold mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800">
						{ buttonText || "Купуйте зараз" }
					</Button>
				</div>
			</div>
		</div>
		) :
		(
			<div className={`${bannerClass} relative banner-right flex flex-col sm:flex-row-reverse justify-start`}>
				<div className="hidden xl:block absolute w-1/2 overflow-hidden h-full top-0 left-0 bg-no-repeat bg-left" style={{ backgroundImage: `url('${bannerImage.src}')` }}></div>
				<Image 
					src={bannerImage.src}
					width={400}
					height={400}
					alt={`${subtitle || title}`}
					className='xl:hidden left-0 top-0 md:absolute'
				/>
				<div className="flex lg:flex-row flex-col">
					<div className="banner-right-content sm:mr-16 m-auto sm:m-0 flex flex-col">
						<h3 className='text-2xl font-bold py-2 text-center'>
							{title || "Banner Title"}
						</h3>
						<p className=' text-center'>
							{subtitle || "Banner Subtitle"}
						</p>
					</div>
					<div className="banner-right-price m-auto  lg:pr-16 flex flex-col">
						<span className='price-gray'> 
							{regularPrice} 
						</span>
						{discountPrice && (
							<span className='price-green  text-2xl'>
								{discountPrice}
							</span>
						)}						
						<Button as={Link} href={BannerLink} pill className="font-semibold bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800">
							{ buttonText || "Купуйте зараз" }
						</Button>
					</div>
				</div>
			</div>
		) 
	)
}


 