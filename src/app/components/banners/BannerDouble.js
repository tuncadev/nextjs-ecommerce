import React from 'react'
import Image from 'next/image'

export const BannerDouble = ({bannerClass, bannerImageLarge, bannerImageSmall}) => {
	const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

	return (

		<>	
		<div className={`${bannerClass} flex flex-col sm:grid sm:grid-cols-3 rounded-md relative  `}>
			<div className="bg-sky-200 col-span-2 max-w-[700px] pl-14 py-10 sm:py-0 flex justify-center items-left flex-col" style={{ backgroundImage: `url('${bannerImageLarge.src}')` }}>
				<h3 className='text-2xl mb-6 max-w-[250px]'>
					WOODEN MINIMALISTIC CHARIS
				</h3>
				<span className='font-semibold'>SALE UP TO</span>
				<span className='price-green'>40% OFF</span>
				<button
				className='bg-[#fb7c00] flex items-center w-32 text-white text-sm font-semibold px-6 py-2 rounded mt-4'>
					Shop Now
				</button>
			</div>
			<div className="bg-[#eef0f1] flex flex-col items-center justify-center mt-8 sm:mt-0">
				<h3 className='font-bold py-3'>Dreamsork</h3>
					<span className='text-2xl max-w-[70%] mx-auto text-center'>PICK 5 PILLOWS FOR YOU DREAM</span>
					<div className="mt-2"><span className='text-lg mr-2'>Starting at</span><span className='text-xl price-red'>$99.99</span></div>
					<Image
						loader={imageLoader}
						src={bannerImageSmall.src} 
						width={200}
						height={161}
						loading='lazy'
						alt="Banner Image"
						className='w-full rounded-lg pbz`-4'
					/>

			</div>
		</div>

		</>

	)
}
