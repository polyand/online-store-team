import { cart } from 'pages/Cart';
import { home } from 'pages/Home';
import { RoutesData } from './types';

const routes: Array<RoutesData> = [
  {
    data: home(),
    path: '/',
  },
  {
    data: cart(),
    path: '/cart',
  },
];

const root = document.getElementById('root');

export function appendPage(): void {
  let route: RoutesData | undefined = routes.find((road) => road.path == window.location.pathname);
  if (root === null) {
    throw new Error();
  }
  if (route) {
    const page = route.data;
    if (page instanceof Node) {
      root.innerHTML = '';
      root.appendChild(page);
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