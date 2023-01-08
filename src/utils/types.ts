export type RoutesData = {
  data: Element | null;
  actions: () => void;
  path?: string;
};

export type ProductProperties = {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
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

export type Filters = {
  price: number[];
  stock: number[];
  type: string[];
  category: string[];
  text: string[];
};

export type WarningMessages = {
  [key: string]: string;
};

export type ValidateFunction = (input: HTMLInputElement) => boolean;

export type FiltredProducts = {
  price: number[];
  stock: number[];
  type: string[];
  category: string[];
  text: string;
};

export type ValidProperties = {
  [key: string]: boolean;
};
