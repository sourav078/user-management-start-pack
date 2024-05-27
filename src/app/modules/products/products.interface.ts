export type IProduct = {
  name: string;
  specification: string;
  key_features: string;
  description: string;
  images: string[];
  thumbnailId: string;
  selling_price: number;
  regular_price: number;
  special_price?: number;
  stock: number;
  slug: string;
  is_active?: boolean;
  unit: string;
  weight?: number;
  brandId?: string;
};
