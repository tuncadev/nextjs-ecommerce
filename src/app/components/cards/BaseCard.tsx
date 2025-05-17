"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/app/types/products";
import { Variation } from "@/app/types/variations";

import FavoriteButton from "@/app/components/buttons/FavoriteButton";
import CartButton from "@/app/components/buttons/CartButton";
import { ProductImageHolder } from "@/app/components/products/ProductImageHolder";
import ProductRating from "@/app/components/products/ProductRating";
import VariationCardPrice from "@/app/components/products/VariationCardPrice";
import ProductCardPrice from "@/app/components/products/ProductCardPrice";
import { AddToCartModal } from "@/app/components/modals/AddToCartModal";
import getProductLink from "@/app/utils/getProductLink";
import getCategoryLink from "@/app/utils/getCategoryLink";
import { useFavorites } from "@/app/context/FavoritesContext";
import { useCart } from "@/app/context/CartContext";
import Working from "../actions/Working";

type Props = {
  product: Product;
  variation?: Variation;
  catHasParent?: boolean;
};

export const BaseCard: React.FC<Props> = ({ product, variation, catHasParent }) => {
  const [openModal, setOpenModal] = useState(false);

  const { handleFavoritesAction, isFavorite } = useFavorites();
  const { variationInCart, CartLoading } = useCart();

  const productImage = variation
    ? (() => {
        try {
          return JSON.parse(variation.image);
        } catch {
          return null;
        }
      })()
    : product?.images?.[0] || "/images/default-category.jpg";

  const handleAddToCart = () => {
    setOpenModal(true);
  };

  const handleFavorites = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (variation) {
      handleFavoritesAction(product, variation);
    } else {
      handleFavoritesAction(product);
    }
  };

  const inCart = variation ? variationInCart(variation.wpId) : product.inCart;
  const isVariation = !!variation;

  const prices = product.variationsData.map((v: any) => Number(v.price)).filter(Boolean);
  const hasPrices = prices.length > 0;
  const min = hasPrices ? Math.min(...prices) : 0;
  const max = hasPrices ? Math.max(...prices) : 0;

  const productHref = isVariation
    ? `${getProductLink(product?.wpId, product?.slug)}?variationId=${variation.id}`
    : getCategoryLink(
        catHasParent ? product?.categories?.[0]?.id : product?.categories?.[1]?.id,
        catHasParent ? product?.categories?.[0]?.slug : product?.categories?.[1]?.slug
      );

  return CartLoading ? (
    <Working />
  ) : (
    <>
      <div className="group/outer border hover:shadow-md border-gray-300 rounded-md px-2 py-1 relative flex flex-col overflow-hidden justify-between h-full w-full md:min-w-[200px] sm:max-w-[150px]">
        <FavoriteButton
          isFavorite={isVariation ? isFavorite(product.id, variation.id) : isFavorite(product.id)}
          onClick={handleFavorites}
        />

        <CartButton inCart={inCart} onClick={handleAddToCart} />

        <div className="flex group flex-col flex-grow">
          <Link href={productHref} className="h-full w-full">
            <ProductImageHolder image={productImage} />

            <div className="flex flex-col justify-between flex-grow mt-2">
              <h3 className="font-semibold text-xs">{product?.name}</h3>
              {isVariation && (
                <span className="text-sm text-[#0066cc] hover:text-[#dd2400] group-hover:text-[#dd2400]">
                  {variation.name}
                </span>
              )}
            </div>

            {!isVariation && <ProductRating average={product.averageRating} />}

            {isVariation ? (
              <VariationCardPrice price={Number(variation.regularPrice)} />
            ) : (
              <ProductCardPrice
                variationsCount={product.variationsData?.length}
                productPrice={product.price}
                min={min}
                max={max}
              />
            )}
          </Link>
        </div>
      </div>

      <AddToCartModal
        openCartModal={openModal}
        setOpenCartModal={setOpenModal}
        productId={product.wpId}
        variationId={variation?.id}
      />
    </>
  );
};
