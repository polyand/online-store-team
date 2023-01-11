import { CartProducts } from 'utils/types';

export let inCart: CartProducts = {
  id: [], // add values for test, in work must be empty
  amount: [], // add values for test, in work must be empty
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
