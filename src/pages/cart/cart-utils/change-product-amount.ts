import { getHtmlElement } from 'utils/getHtmlElement';
import { ProductProperties } from 'utils/types';
import { createProductItem } from './create-product-item';
import { inCart, saveProductsInCart } from 'utils/saveCart';
import { triggerEmptyCart } from './trigger-empty-cart';
import { changeSummaryCost } from './change-sum-cost';
import { changeSummaryAmount } from './change-sum-amount';
import { promoCodes } from './promo-codes';

function calculateProductsPrice(productAmount: number, productPrice: number, i: number) {
  const productTotalPrice = document.querySelectorAll('.price-amount');
  const price = productAmount * productPrice;
  productTotalPrice[i].textContent = `${price}`;
}

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
      calculateProductsPrice(inCart.amount[index], productData.price, index);
      changeSummaryCost(inCart, promoCodes);
      changeSummaryAmount(inCart);
      if (productData.stock === Number(amount) && buttonAdd instanceof HTMLButtonElement) {
        buttonAdd.disabled = true;
      }
    }
    productAmount.textContent = amount;
  });
  buttonDel.addEventListener('click', () => {
    let amount = productAmount.textContent;
    if (amount) {
      amount = `${Number(amount) - 1}`;
      inCart.amount[index]--;
      saveProductsInCart();
      calculateProductsPrice(inCart.amount[index], productData.price, index);
      changeSummaryCost(inCart, promoCodes);
      changeSummaryAmount(inCart);
      if (inCart.amount[index] === 0) {
        inCart.amount.splice(index, 1);
        inCart.id.splice(index, 1);
        liElement.outerHTML = '';
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
