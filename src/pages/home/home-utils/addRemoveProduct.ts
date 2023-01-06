import { getHtmlElement } from 'utils/getHtmlElement';
import { getHtmlCollection } from 'utils/getHtmlCollection';
import { addToCart } from 'utils/addToCart';
import { dropFromCart } from 'utils/dropFromCart';
import { headerActions } from 'components/header/header';

export function addRemoveProduct() {
  const buttonsList = getHtmlElement(document, '.home__products-list');
  const buttons = getHtmlCollection(document, '.product-footer-info__btn-buy');
  buttonsList.addEventListener('click', (event) => {
    buttons.forEach((button: Element) => {
      if (event.target === button && button.classList.contains('product-footer-info__btn-buy_add')) {
        button.classList.toggle('product-footer-info__btn-buy_add');
        button.classList.toggle('product-footer-info__btn-buy_remove');
        button.innerHTML = 'Remove<br>from cart'.replace('<br>', '<br/>');
        addToCart(+button.id.slice(4));
        headerActions();
      } else {
        if (event.target === button && button.classList.contains('product-footer-info__btn-buy_remove')) {
          button.classList.toggle('product-footer-info__btn-buy_remove');
          button.classList.toggle('product-footer-info__btn-buy_add');
          button.innerHTML = 'Add to cart';
          dropFromCart(+button.id.slice(4));
          headerActions();
        }
      }
    });
  });
}
