import CartContent from "@/app/components/cart/CartContent";
import { getMetadata } from "@/app/utils/getMetadata";

export const metadata = getMetadata({
	title: "Кошик",
	description: "Перевірте товари у вашому кошику",
});


export default function Page() {
  return <CartContent />;
}

