import { getHtmlElement } from 'utils/getHtmlElement';
import { ProductProperties } from 'utils/types';
import { createProductItem } from './create-product-item';
import { inCart, saveProductsInCart } from 'utils/saveCart';
import { triggerEmptyCart } from './trigger-empty-cart';

export function changeProductAmount(liElement: HTMLLIElement, productData: ProductProperties, index: number) {
  const buttonDel = getHtmlElement(liElement, '.controls-del');
  const buttonAdd = getHtmlElement(liElement, '.controls-add');
  const productAmount = getHtmlElement(liElement, '.controls-amount');
  buttonAdd.addEventListener('click', () => {
    let amount = productAmount.textContent;
    if (amount) {
      amount = `${Number(amount) + 1}`;
      inCart.amount[index]++;
      saveProductsInCart();
      if (productData.stock === Number(amount) && buttonAdd instanceof HTMLButtonElement) {
        buttonAdd.disabled = true;
      }
    }
    console.log(index);
    productAmount.textContent = amount;
  });
  buttonDel.addEventListener('click', () => {
    let amount = productAmount.textContent;
    if (amount) {
      amount = `${Number(amount) - 1}`;
      inCart.amount[index]--;
      if (inCart.amount[index] === 0) {
        inCart.amount.splice(index, 1);
        inCart.id.splice(index, 1);
        liElement.outerHTML = '';
        saveProductsInCart();
        if (inCart.id.length === 0) {
          triggerEmptyCart();
          saveProductsInCart();
        } else {
          createProductItem(inCart);
          saveProductsInCart();
        }
      }
    }
    productAmount.textContent = amount;
  });
}
