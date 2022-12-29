export type RoutesData = {
  data: Element | null;
  path?: string;
};

//===============ToDo=================
//===========The same type============

export type Product = {
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

export type CartProducts = {
  id: number[];
  amount: number[];
};

export type Promocodes = {
  name: string[];
  percentDicsount: number[];
};

export type DiscountProperties = Array<[string, number]>;

export type PaginationData = {
  currentPage: number;
  productsPerPage: number;
};