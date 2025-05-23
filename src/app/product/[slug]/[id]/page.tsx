
import { SingleProduct } from "@/app/components/products/SingleProduct";

import { generatePageMetadata } from "@/app/utils/generatePageMetadata";

import type { Metadata } from "next";

type Params = {
  id: string;
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  return generatePageMetadata({ type: "product", id });
}


export default function Page() {
  return <SingleProduct />;
}
