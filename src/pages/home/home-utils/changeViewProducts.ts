import { getHtmlElement } from 'utils/getHtmlElement';
import { setQueries } from 'utils/queries';

export let blockItemFlag: boolean;

export function changeView(): void {
  const viewButton = getHtmlElement(document, '.home__view-button');
  const home = getHtmlElement(document, '.home');
  const productsList = getHtmlElement(document, '.home__products-list');
  const productItem = document.querySelectorAll('.home__product-item');
  const filters = getHtmlElement(document, '.home__filters');
  const buttons = getHtmlElement(document, '.home__buttons');

  if (!productItem) {
    throw new Error('Must be an HTMLElement!');
  }
  productItem.forEach((listItem: Element) => {
    if (!(listItem instanceof HTMLDivElement)) {
      throw new Error('Must be an HTMLElement!');
    }
  });
  productItem.forEach((item: Element) => {
    const productsItemImg = getHtmlElement(item, '.product-item__img');
    const listInfo = getHtmlElement(item, '.list-info');
    const footerInfo = getHtmlElement(item, '.product-footer-info');
    item.classList.toggle('product-item_block');
    item.classList.toggle('product-item_list');
    productsItemImg.classList.toggle('product-item__img_block');
    productsItemImg.classList.toggle('product-item__img_list');
    footerInfo.classList.toggle('product-footer-info_block');
    footerInfo.classList.toggle('product-footer-info_list');
    listInfo.classList.toggle('invisible');
  });
  home.classList.toggle('home_block');
  home.classList.toggle('home_list');
  filters.classList.toggle('home__filters_list');
  buttons.classList.toggle('home__buttons_list');
  viewButton.classList.toggle('home__view-button_block');
  viewButton.classList.toggle('home__view-button_list');
  productsList.classList.toggle('home__products-list_block');
  productsList.classList.toggle('home__products-list_list');

  blockItemFlag = !blockItemFlag;
}

export function changeViewProducts(): void {
  const viewButton = getHtmlElement(document, '.home__view-button');
  blockItemFlag = viewButton.classList.contains('home__view-button_block') ? true : false;

  // Click. Change button view
  viewButton.addEventListener('click', () => {
    changeView();
    if (blockItemFlag) {
      setQueries({ name: 'view', value: 'block' });
    } else {
      setQueries({ name: 'view', value: 'list' });
    }
  });
}
