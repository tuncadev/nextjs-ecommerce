"use client";
import { useParams } from "next/navigation";
 import { useProducts } from "@/app/context/ProductsContext";
import ProductTitleSection from "@/app/components/products/ProductTitleSection";
import { ProductDescription } from "@/app/components/products/ProductDescription";
import { ProductShortDescription } from "@/app/components/products/ProductShortDescription";
import { ProductTags } from "@/app/components/products/ProductTags";
import { ProductStock } from "@/app/components/products/ProductStock";
import ImageCarousel from "@/app/components/products/ImageCarousel";
import { SingleProductActions } from "@/app/components/products/SingleProductActions";
import { useEffect, useMemo, useState } from "react";
import { Variation } from "@/app/types/variations";
import { ProductImageHolder } from "./ProductImageHolder";
import { ProductPrice } from "./ProductPrice";
import { ProductVariationSelector } from "./ProductVariationSelector";
import { Loading } from "@/app/components/actions/Loading";
import { useSearchParams } from "next/navigation";


type SingleProductProps = {
	productId?: number;
	variationId?: number;
  isModal?: boolean;
  openCartModal?: boolean;
  setOpenCartModal?: (open: boolean) => void;
};

export const SingleProduct: React.FC<SingleProductProps> = ({ productId, isModal, openCartModal,variationId, setOpenCartModal }) => {

	const params = useParams();

	const searchParams = useSearchParams();
	const urlVariationId = Number(searchParams.get("variationId")) || variationId;
	const {products, productsLoading, getProductById} = useProducts();
	const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string>>({});
	
	const product = useMemo(() => {
		if (productsLoading) return undefined;
		
		const SingleproductId = productId ? productId : Number(params?.id);
		
		return getProductById(SingleproductId);
		
	}, [params.slug, products]);

	const selectedVariation: Variation = useMemo(() => {
		if (!product?.variationsData || !Array.isArray(product.variationsData)) return undefined;
	
		return product.variationsData.find((variation) => {
			if (!variation.attributes) return false;
	
			const attrs = Array.isArray(variation.attributes)
				? variation.attributes
				: JSON.parse(variation.attributes);
	
			return attrs.every((attr: any) =>
				selectedAttributes[attr.name] === attr.option
			);
		});
	}, [product?.variationsData, selectedAttributes]);

	useEffect(() => {
		if (!product || !urlVariationId) return;
	
		const variation = product.variationsData?.find((v: Variation) => v.id === urlVariationId);
		if (!variation) return;
	
		const attrs = Array.isArray(variation.attributes)
			? variation.attributes
			: JSON.parse(variation.attributes || "[]");
	
		const initialAttrs: Record<string, string> = {};
		attrs.forEach((attr: any) => {
			initialAttrs[attr.name] = attr.option;
		});
	
		setSelectedAttributes(initialAttrs);
	}, [product, urlVariationId]);
	

	
const attributeNames = useMemo(() => {
  if (!product?.attributes || !Array.isArray(product.attributes)) return [];
  return product.attributes.map((attr: any) => attr.name);
}, [product]);

if (productsLoading || !product) return <Loading text="product details..." />;

	return (
		<>
			<section className={`${isModal ? " w-full max-h-[80vh] overflow-y-auto " : ""}`}>
				<ProductTitleSection productName={product?.name} productSku={product?.sku} productUrl={"#"} />
				<div className="flex flex-col sm:grid sm:grid-cols-5 w-full">
					<div className="col-span-2">
						<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-6">
							{/** product?.images && 
								<ImageCarousel images={product.images} />
							*/}
							{ selectedVariation?.image ? (
								<ProductImageHolder image={selectedVariation?.image} />

							) : (
								product?.images && <ImageCarousel images={
									product.images.map((img: { id: number; src: string; alt: string }) => ({
									...img,
									productName: product.name || "",
								}))} />
							)}
							
						</div>
					</div>
					<div className="col-span-3 p-4 sm:pl-10">
						<div className="flex flex-col p-4 border-b border-b-gray-200">			
							{/** <ProductPrice price={product.price} regularPrice={Number(product.regularPrice)} salePrice={Number(product.salePrice)} onSale={product.onSale} className="text-[24px] font-bold" />*/}			
							<ProductPrice
								price={selectedVariation?.price ?? product.price}
								regularPrice={Number(selectedVariation?.regularPrice ?? product.regularPrice)}
								salePrice={Number(selectedVariation?.salePrice ?? product.salePrice)}
								onSale={selectedVariation ? !!selectedVariation.salePrice : product.onSale}
								className="text-[24px] font-bold"
							/>
		
							<ProductStock
								stockQuantity={product?.stockQuantity}
								stockStatus={product?.stockStatus}
							/>
						</div>
						<div className="flex flex-col p-4 border-b border-b-gray-200">				
							<ProductShortDescription description={product.shortDescription} />
						</div>
						{Array.isArray(product.attributes) && product.attributes.length > 0 && (
							<div className="flex flex-col p-4 border-b border-b-gray-200">
								<ProductVariationSelector
									attributes={product.attributes}
									selectedAttributes={selectedAttributes}
									setSelectedAttributes={setSelectedAttributes}
								/>
							</div>
						)}

						<div className="flex items-center border-b border-b-gray-200">
							
						<SingleProductActions
							selectedVariation={selectedVariation}
							requiredAttributes={attributeNames}
							selectedAttributes={selectedAttributes}
							product={product}
							openCartModal={openCartModal || false}
							setOpenCartModal={setOpenCartModal}
						/>

						</div>
						<div className="flex items-center border-b border-b-gray-200">
							<ProductTags
								tags={typeof product.tags === "string" ? JSON.parse(product.tags) : product.tags}
								category={product.categories[0].name} 
							/>
						</div>
						
					</div>
				</div>
			</section>
			{!isModal && (
			<section className="p-4">
				<ProductDescription title="Опис товару" description={product.description}  />
			</section>
			)}
		</>

	);
};
