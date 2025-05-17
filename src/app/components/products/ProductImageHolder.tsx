import React from "react";
import { FallBackImageHolder } from "./FallBackImageHolder";

type ProductImageHolderProps = {
  maxSize?: string;
  image?: any;
};

export const ProductImageHolder: React.FC<ProductImageHolderProps> = ({
  image,
  maxSize = "auto"
}) => {
  let ProductImage;

  try {
    ProductImage = typeof image === "string" ? JSON.parse(image) : image;
  } catch {
    return <FallBackImageHolder />;
  }

  if (!ProductImage?.src) return <FallBackImageHolder />;

  const imageMaxSize = `max-w-[${maxSize}]`;

  return (
    <div className={`${imageMaxSize} flex items-center justify-center rounded-[0.5rem] overflow-hidden`}>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`/api/media?url=${encodeURIComponent(ProductImage.src)}`}
        />
        <source
          media="(min-width: 768px) and (max-width: 1024px)"
          srcSet={`/api/media?url=${encodeURIComponent(ProductImage.src)}`}
        />
        <img
          src={`/api/media?url=${encodeURIComponent(ProductImage.src)}`}
          alt={ProductImage.alt || "Product Image"}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </picture>
    </div>
  );
};
			