import React from 'react'
import Image from 'next/image'
export const BannerRight = ({bannerClass, bannerImage}) => {
 
	return (
		<>
		<div className={`${bannerClass} relative banner-right flex flex-col sm:flex-row-reverse justify-start`}>
			<div className="hidden xl:block absolute w-full h-full top-0 left-0 bg-no-repeat bg-left " style={{ backgroundImage: `url('${bannerImage.src}')` }}></div>
			<Image 
				src={bannerImage.src}
				width={400}
				height={400}
				alt='FABRIC BED DISCOUNT'
				className='xl:hidden left-0 top-0 md:absolute '
			/>
			<div className="flex lg:flex-row flex-col">
				<div className="banner-right-content sm:mr-16 m-auto sm:m-0 flex flex-col">
					<h3 className='text-2xl font-bold py-2 text-center'>FABRIC BED DISCOUNT</h3>
					<p className=' text-center'>Strong mattress support with 10 wood slats prevents sagging and increases mattress life</p>
				</div>
				<div className="banner-right-price m-auto  lg:pr-16 flex flex-col">
					<span className='price-discount-gray'> $900</span>
					<span className='price-green  text-2xl'>$219</span>
					<button
					className='bg-[#fb7c00] text-white text-sm font-semibold px-6 py-2 rounded mt-4'>
						Shop Now
					</button>
				</div>
			</div>
		</div>
		</>
	)
}
