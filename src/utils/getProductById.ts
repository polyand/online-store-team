import productsData from '../data/data.json';
import { ProductProperties } from './types';

export function getProductData(productId: number) {
  const items = productsData.products;
  let product: ProductProperties | undefined;
  items.forEach((item) => {
    if (item.id === productId) {
      product = item;
    }
  });
  if (!product) {
    throw new Error('Can not find product by ID!');
  }
  return product;
}
