// src/app/utils/getProductLink.js
export const getProductLink = (product) => {
  if (!product || !product.categories?.length) return "#";

  const category = product.categories[0];
return `/${category.slug}/c${category.id}/${product.slug}/p${product.id}`;
};
