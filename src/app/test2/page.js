"use client";
import { useProducts } from "@/app/hooks/useProducts";
import { useParams } from "next/navigation";
import { Loading } from "@/app/components/Loading";

export default function  ProductDetails() {
	const { getProductById,  loading } = useProducts();
	const params = useParams();

	if (!params?.id) return <Loading />;
	const product = getProductById(params.id);
 

	return (
		<>
		<article id={`product-${params.id}`}>
			asd
		</article>
		</>
	)
}
