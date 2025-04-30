// src/app/utils/getProductLink.ts
 
const getProductLink = (id: number | null | undefined, slug: string | null | undefined) => {
  if (!id) return "#";
  	return `/product/${slug}/${id}`;
};

export default getProductLink;
