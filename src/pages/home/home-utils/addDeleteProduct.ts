import { getHtmlElement } from 'utils/getHtmlElement';

export function addDeleteProduct() {
  const buttonsList = getHtmlElement(document, '.home__products-list');
  const buttons = document.querySelectorAll('.product-footer-info__btn-buy');

  if (!buttons) {
    throw new Error('Must be an HTMLElement!');
  }
  buttons.forEach((listItem: Element) => {
    if (!(listItem instanceof HTMLElement)) {
      throw new Error('Must be an HTMLElement!');
    }
  });

  buttonsList.addEventListener('click', (event) => {
    buttons.forEach((button: Element) => {
      if (event.target === button && button.classList.contains('product-footer-info__btn-buy_add')) {
        button.classList.toggle('product-footer-info__btn-buy_add');
        button.classList.toggle('product-footer-info__btn-buy_delete');
        button.innerHTML = 'Remove<br>from cart'.replace('<br>', '<br/>');
        // Code add to cart
      } else {
        if (event.target === button && button.classList.contains('product-footer-info__btn-buy_delete')) {
          button.classList.toggle('product-footer-info__btn-buy_delete');
          button.classList.toggle('product-footer-info__btn-buy_add');
          button.innerHTML = 'Add to cart';
          // Code delete from cart
        }
      }
    });
  });
}
