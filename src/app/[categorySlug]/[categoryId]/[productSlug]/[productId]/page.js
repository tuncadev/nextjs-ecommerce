"use client";
import { useParams } from 'next/navigation';
import { useProducts } from '@/app/hooks/useProducts';
import { useState, useEffect } from 'react';
import { Loading } from '@/app/components/Loading';
import Image from 'next/image';
import ProductTitleSection from '@/app/components/products/ProductTitleSection';
import { Carousel } from "flowbite-react";
import { ProductPrice } from '@/app/components/products/ProductPrice';
import { ProductDescription } from '@/app/components/products/ProductDescription';
import { SingleProductActions } from '@/app/components/products/SingleProductActions';
import { ProductTags } from '@/app/components/products/ProductTags';
import { useCartContext } from "@/app/context/CartContext";


export default function ProductPage() {
    const { productId } = useParams();
    const { getProductFromRedisById } = useProducts();
 

    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
					//	const redisProduct = await getProductFromRedisById(productId);
 
            const data = await getProductFromRedisById(productId.substring(1)); // Remove "p"
             setProduct(data);
        }
        fetchProduct();
    }, [productId]);

		
    if (!product) return <Loading text="product details..." />;
 
    return (
        <>
					<ProductTitleSection productName={product.name} productSku={product.sku} productUrl={"#"} />
					<div className="flex flex-col sm:grid sm:grid-cols-5 w-full">
						<div className="col-span-2">
							<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-6">
								<Carousel className='carousel' slide={false} >
										{product?.images.map((image) => (
											<div key={image.id} className="w-full h-full flex items-center justify-center">
												<picture>
													<source media="(max-width: 767px)" srcSet={`/api/media?url=${image.src}`} />
													<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`/api/media?url=${image.src}`} />
													<img src={`/api/media?url=${image.src}`} alt="Product" />
												</picture>
											</div>
										))}
								</Carousel>	
							</div>
						</div>
						<div className="col-span-3 p-4 sm:pl-10">
							<div className="flex flex-col p-4 border-b border-b-gray-200">								
									<ProductPrice price={product.price} regularPrice={product.regular_price} salePrice={product.sale_price} onSale={product.on_sale} className="text-[24px] font-bold" />
									{(product.stock_quantity > 0 || product.stock_status === "instock") && (
										<div className='flex items-center'>
											<span className='text-xs text-gray-600'>наявність:</span>  
											<span className='instock text-xs text-lime-700 pl-2'>в наявності</span> 
										</div>
									)}
							</div>
							<div className="flex flex-col p-4 border-b border-b-gray-200">				
								<ProductDescription description={product.short_description} />
							</div>
							<div className="flex items-center border-b border-b-gray-200">
								<SingleProductActions product={product} />
							</div>
							<div className="flex items-center border-b border-b-gray-200">
								<ProductTags category={product.categories[0].name} tags={product.tags} />
							</div>
							
						</div>
					</div>

				</>
				
    );
}
