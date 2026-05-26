export interface Product {
  productResourceId: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  code: string;
  image: string;
  available: boolean;
  discount: number;
  discountQuantity: number;
  material: string;
}