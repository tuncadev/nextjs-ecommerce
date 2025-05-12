import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import Link from "next/link";

type BannerDoubleProps = {
  bannerClass?: string | "";
	bigBannerPosition?: string | "left";

  bannerImageLarge: { src: string };
	regularPriceLarge: string;
	discountPriceLarge: string;
	subtitleLarge?:string;
	titleLarge: string;
	linkLarge: string;
	buttonTextLarge?: string;

  bannerImageSmall: { src: string };
	regularPriceSmall: string;
	subtitleSmall?:string;
	titleSmall: string;
	linkSmall: string;
	buttonTextSmall?: string;
};

export const BannerDouble: React.FC<BannerDoubleProps> = ({
  bannerClass,
	bigBannerPosition,
  bannerImageLarge,
	regularPriceLarge,
	discountPriceLarge,
	subtitleLarge,
	titleLarge,
	buttonTextLarge,
	linkLarge,
  bannerImageSmall,
	regularPriceSmall,
	subtitleSmall,
	titleSmall,
	linkSmall,
	buttonTextSmall
}) => {
 

  return (
    <div
      className={`${bannerClass} flex flex-col ${bigBannerPosition === "left" ? "sm:flex-row" : "sm:flex-row-reverse" } justify-between rounded-md relative`}
    >
			{/** Left Banner */}
      <div
        className="bg-sky-200 col-span-2 max-w-[65%]  overflow-hidden pl-14 py-10 sm:py-0 bg-no-repeat bg-cover flex justify-center items-left flex-col"
        style={{ backgroundImage: `url('${bannerImageLarge.src}')` }}
      >
				<div className="max-w-[80%]">
					<h3 className="text-2xl">
						{titleLarge}
					</h3>
					<h4 className="text-sm mb-6">
						{subtitleLarge}
					</h4>
				</div>
        <span className="font-semibold">РОЗПРОДАЖ ДО</span>
        <span className="price-green">
					{Math.round(((Number(regularPriceLarge) - Number(discountPriceLarge)) / Number(regularPriceLarge)) * 100)}%
					</span>
					<Button  as={Link} href={linkLarge}  pill className="max-w-[200px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800">
						{ buttonTextLarge || "Купуйте зараз" }
					</Button>
      </div>
			{/** Right Banner */}
      <div className="bg-[#eef0f1] max-w-[30%]  flex flex-col relative  py-4  overflow-hidden items-center justify-center mt-8 sm:mt-0">
        <h3 className="font-bold py-3">
					{titleSmall}
				</h3>
        <span className="text-2xl max-w-[70%] mx-auto text-center">
          {subtitleSmall}
        </span>
        <div className="mt-2">
          <span className="text-lg mr-2">Починаючи з</span>
          <span className="text-xl price-red">{regularPriceSmall} ₴</span>
        </div>
				<div className="relative w-[200px] h-[161px] mt-4 mx-auto">
					<Image
						src={bannerImageSmall.src}
						fill
						alt="Banner Image"
						className="object-contain rounded-lg"
						loading="lazy"
						sizes="(max-width: 640px) 100vw, 200px"
					/>
				</div>
				<Button  as={Link} href={linkSmall}  pill className="max-w-[200px] mt-4 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800">
					{ buttonTextSmall || "Купуйте зараз" }
				</Button>
      </div>
    </div>
  );
};
