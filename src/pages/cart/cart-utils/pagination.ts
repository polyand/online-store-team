import { getHtmlElement } from 'utils/getHtmlElement';
import { inCart } from 'utils/saveCart';
import { PaginationData } from 'utils/types';
import { createProductItem } from './create-product-item';

export const paginationData: PaginationData = {
  currentPage: 1,
  productsPerPage: 3,
};

function stayFocused(input: HTMLInputElement) {
  input.onblur = () => {
    const label = getHtmlElement(document, '.products__header-label');
    if (label.classList.contains('wrong')) {
      label.classList.add('focus');
      setTimeout(() => {
        label.classList.remove('focus');
      }, 1000);
      input.focus();
    }
  };
}

function validatePaginationInput(inputValue: string) {
  const label = getHtmlElement(document, '.products__header-label');
  const numerableValue = +inputValue;
  if (isNaN(numerableValue) || numerableValue < 1 || numerableValue > 99 || !Number.isInteger(numerableValue)) {
    label.classList.add('wrong');
    return false;
  } else {
    label.classList.remove('wrong');
    return true;
  }
}

function getProductPerPageValue() {
  const inputProductsPerPage = getHtmlElement(document, '#paginate');
  if (inputProductsPerPage instanceof HTMLInputElement) {
    if (validatePaginationInput(inputProductsPerPage.value)) {
      paginationData.productsPerPage = +inputProductsPerPage.value;
    } else {
      stayFocused(inputProductsPerPage);
    }
  }
  createProductItem(inCart);
}

function nextPaginatedPage() {
  const currentPage = getHtmlElement(document, '.products__header-current-page');
  const nextPageBtn = getHtmlElement(document, '.products__header-next');
  const prevPageBtn = getHtmlElement(document, '.products__header-prev');
  paginationData.currentPage++;
  currentPage.textContent = `${paginationData.currentPage}`;
  createProductItem(inCart);
  const maxPageValue = paginationData.productsPerPage * paginationData.currentPage;
  if (nextPageBtn instanceof HTMLButtonElement && prevPageBtn instanceof HTMLButtonElement) {
    if (inCart.id.length <= maxPageValue) {
      nextPageBtn.disabled = true;
    } else {
      nextPageBtn.disabled = false;
    }
    prevPageBtn.disabled = false;
  }
}

function prevPaginatedPage() {
  const currentPage = getHtmlElement(document, '.products__header-current-page');
  const nextPageBtn = getHtmlElement(document, '.products__header-next');
  const prevPageBtn = getHtmlElement(document, '.products__header-prev');
  paginationData.currentPage--;
  currentPage.textContent = `${paginationData.currentPage}`;
  createProductItem(inCart);
  if (nextPageBtn instanceof HTMLButtonElement && prevPageBtn instanceof HTMLButtonElement) {
    if (paginationData.currentPage === 1) {
      prevPageBtn.disabled = true;
    } else {
      prevPageBtn.disabled = false;
    }
    nextPageBtn.disabled = false;
  }
}

function setPaginationProperties() {
  const inputProductsPerPage = getHtmlElement(document, '#paginate');
  inputProductsPerPage.addEventListener('input', getProductPerPageValue);

  const nextPageBtn = getHtmlElement(document, '.products__header-next');
  nextPageBtn.addEventListener('click', nextPaginatedPage);
  if (nextPageBtn instanceof HTMLButtonElement) {
    const maxPageValue = paginationData.productsPerPage * paginationData.currentPage;
    if (inCart.id.length <= maxPageValue) {
      nextPageBtn.disabled = true;
    } else {
      nextPageBtn.disabled = false;
    }
  }
  const prevPageBtn = getHtmlElement(document, '.products__header-prev');
  prevPageBtn.addEventListener('click', prevPaginatedPage);
  if (paginationData.currentPage === 1 && prevPageBtn instanceof HTMLButtonElement) {
    prevPageBtn.disabled = true;
  }
}

export function pagination(productsList: HTMLLIElement[], paginationProps: PaginationData): HTMLLIElement[] {
  setPaginationProperties();
  const itemsPerPage = paginationProps.productsPerPage;
  let page = paginationProps.currentPage;
  while (productsList.length < itemsPerPage * page - itemsPerPage + 1) {
    page = page - 1;
  }
  const firstElem = itemsPerPage * (page - 1);
  const lastElem = firstElem + itemsPerPage;
  const paginatedPage = productsList.slice(firstElem, lastElem);
  paginationProps.currentPage = page;
  return paginatedPage;
}

export function getPaginatedProductId(productsList: HTMLLIElement[], paginationProps: PaginationData): number {
  const itemsPerPage = paginationProps.productsPerPage;
  let page = paginationProps.currentPage;
  if (productsList.length <= itemsPerPage) {
    return 0;
  }
  while (productsList.length < itemsPerPage * page - itemsPerPage + 1) {
    page = page - 1;
  }
  const firstElem = itemsPerPage * (page - 1);
  return firstElem;
}
