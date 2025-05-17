import { Product } from "@/app/types/products";
import { Variation } from "@/app/types/variations";
import { BaseCard } from "@/app/components/cards/BaseCard";

type Props = {
  product: Product;
  variation: Variation;
};

export const VariationCard01 = ({ product, variation }: Props) => {
  return <BaseCard product={product} variation={variation} />;
};
