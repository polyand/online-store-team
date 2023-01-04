import { ProductProperties } from 'utils/types';

export function checkTextFilter(str: string, product: ProductProperties): boolean {
  if (str === '') {
    return true;
  }
  const keys = Object.keys(product);
  for (let i = 1; i < keys.length - 2; i++) {
    const data = `${product[keys[i]]}`.toLowerCase();
    if (data.includes(str)) {
      return true;
    }
  }
  return false;
}
