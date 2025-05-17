import { Product } from "@/app/types/products";
import { BaseCard } from "@/app/components/cards/BaseCard";

type Props = {
  product: Product;
  isModal?: boolean;
  catHasParent?: boolean;
};

export const ProductCard01 = ({ product, catHasParent }: Props) => {
  return <BaseCard product={product} catHasParent={catHasParent} />;
};
