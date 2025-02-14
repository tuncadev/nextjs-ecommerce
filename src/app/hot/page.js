"use client"
import { useProducts } from "@/app/hooks/useProducts";
import { ProductCard01 } from "../components/cards/ProductCard01";
import { Loading } from "../components/Loading";
import { InfoBadge } from "../components/badges/InfoBadge";

export default function page() {
  const { getHotOffers, loading } = useProducts();
  const hotOffers = getHotOffers();

  if (loading) return <Loading text="hot offers..." />
  if (!hotOffers.length) return <InfoBadge title="Ooops" text="No hot offers available at the moment." />

  return (
    <section>
      <h2>🔥 Hot Offers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {hotOffers.map((product) => (
          <ProductCard01 key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};