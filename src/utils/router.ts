import { home } from '../pages/home';
import { cart } from '../pages/cart';
import { homeActions } from '../pages/home/home';
import { cartActions } from '../pages/cart/cart';
import { RoutesData } from './types';
import { product } from 'pages/product';
import { productActions } from 'pages/product/product';
import { getGlobalProductId } from './getGlobalProductId';

const routes = [
  {
    data: home(),
    actions: homeActions,
    path: '/',
  },
  {
    data: cart(),
    actions: cartActions,
    path: '/cart',
  },
  {
    data: product(),
    actions: productActions,
    path: `/products/${getGlobalProductId()}`,
  },
];

const root = document.getElementById('root');

export function appendPage(): void {
  const route: RoutesData | undefined = routes.find((road) => road.path == window.location.pathname);
  if (root === null) {
    throw new Error();
  }
  if (route) {
    const page = route.data;
    if (page instanceof Node) {
      root.innerHTML = '';
      root.appendChild(page);
      route.actions();
    }
  }
}

export function router(event: Event): void {
  event.preventDefault();
  const target = event.target;
  if (target instanceof HTMLAnchorElement) {
    history.pushState({}, 'newUrl', target.href);
  }
  appendPage();
}
