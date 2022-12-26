import { CartProducts } from 'utils/types';

export let inCart: CartProducts = {
  id: [1, 6, 11, 15, 18],
  amount: [1, 2, 2, 1, 5],
};

export function saveProductsInCart(): void {
  localStorage.removeItem('inCart');
  localStorage.setItem('inCart', JSON.stringify(inCart));
}

export function loadProductsFromCart(): void {
  const loadCart = localStorage.getItem('inCart');
  if (loadCart) {
    inCart = JSON.parse(loadCart);
  }
}
