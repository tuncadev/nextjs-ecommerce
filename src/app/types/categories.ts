export type Category = {
  id: number;
  wpId: number;
  name: string;
  slug: string;
  hash: string;
  parent?: number;
  description?: string;
  display: string;
  image: any;
  menuOrder: number;
  count: number;
  featured: boolean;
};