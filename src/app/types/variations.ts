export type Variation = {
  id: number;
  wpId: number;
	productId: number;
  name: string;
  hash: string;
  permalink?: string;
  description?: string;
  shortDescription?: string;
	sku?: string;
	price: number;
	regularPrice: string;
	salePrice?: string;
  image?: any;
	attributes?: any;
};

