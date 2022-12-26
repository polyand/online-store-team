export type RoutesData = {
  data: Element | null;
  path?: string;
};

export type CartProducts = {
  id: number[];
  amount: number[];
};

export type ProductProperties = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  type: string;
  category: string;
  thumbnail: string;
  images: string[];
};
