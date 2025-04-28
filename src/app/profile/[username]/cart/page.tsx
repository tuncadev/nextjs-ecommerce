import { globalMetadata } from "@/app/config/metadata";
 import CartContent from "@/app/components/cart/CartContent";

export const metadata = {
  title: `${globalMetadata.title} | Вхід`,
  description: "Увійдіть у свій обліковий запис, щоб переглядати та керувати замовленнями.",
};

export default function Page() {
  return <CartContent />;
}

