// src/app/utils/getCategoryLink.ts
 
const getCategoryLink = (id: number | null | undefined, slug: string | null | undefined): string => {

  if (!id) return "#";
  return `/category/${slug}/${id}`;
};

export default getCategoryLink;
