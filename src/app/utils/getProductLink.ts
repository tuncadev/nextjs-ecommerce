// src/app/utils/getProductLink.ts
 
const getProductLink = (id: number | null | undefined, slug: string | null | undefined): string => {

  if (!id) return "#";
  return `/product/${slug}/${id}`;
};

export default getProductLink;
