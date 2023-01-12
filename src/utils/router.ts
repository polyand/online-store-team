import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { RoutesData } from './types';
import { ProductPage } from 'pages/product/product';
import { getGlobalProductId } from './getGlobalProductId';

const cartPage = new CartPage();
const homePage = new HomePage();
const productPage = new ProductPage();

const routes = [
  {
    data: homePage.home(),
    actions: homePage.homeActions,
    path: '/',
  },
  {
    data: cartPage.cart(),
    actions: cartPage.cartActions,
    path: '/cart',
  },
  {
    data: productPage.product(),
    actions: productPage.productActions,
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
