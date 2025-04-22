 
import HomePage from "@/app/components/HomePage";
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
  return generatePageMetadata({ type: "category", id });
}

export default function Home() {
  return <HomePage />;
}
