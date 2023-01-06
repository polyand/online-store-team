import { ProductProperties } from 'utils/types';

export function checkTextFilter(str: string[], product: ProductProperties): boolean {
  if (str[0] === '') {
    return true;
  }
  const keys = Object.keys(product);
  for (let i = 1; i < keys.length - 2; i++) {
    const data = `${product[keys[i]]}`.toLowerCase();
    if (data.includes(str[0])) {
      return true;
    }
  }
  return false;
}
