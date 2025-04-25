"use client";
import { useParams } from "next/navigation";
import { useProducts } from "@/app/context/ProductsContext";
import { useMemo } from "react";
import { SingleProduct } from "@/app/components/products/SingleProduct";
import { Loading } from "@/app/components/actions/Loading";


const ProductPage: React.FC = () => { 
	const params = useParams();
	const {loading, getProductBySlug} = useProducts();
	const product = useMemo(() => {
		if (loading) return undefined;
		
		const product_slug = params?.slug;
		if (typeof product_slug !== "string") return undefined;
	
		return getProductBySlug(product_slug);
	}, [params.slug, loading]);


	

 
if (loading || !product) return <Loading text="product details..." />;


 	return (
		<SingleProduct product={product}  />
	)
}

export default ProductPage;

