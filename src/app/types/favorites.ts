export type FavoritesType = {
  id: number;
  userId?: string;
  sessionToken?: string;
  productId: number;
  variationId?: number | null;
};