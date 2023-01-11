import { changeView, blockItemFlag } from './changeViewProducts';

export function setViewProducts(queryParams: string[] | string): void {
  if (queryParams[0] === 'list' || (queryParams.length === 0 && !blockItemFlag)) {
    changeView();
  }
}
