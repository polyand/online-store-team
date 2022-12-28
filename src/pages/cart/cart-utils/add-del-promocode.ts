import { getHtmlElement } from 'utils/getHtmlElement';
import { inCart } from 'utils/saveCart';
import { changeSummaryCost } from './change-sum-cost';
import { createPromoBlock } from './create-promo-block';
import { discounts, promoCodes, stylePromo } from './promo-codes';

function addPromocode() {
  const input = getHtmlElement(document, '.summary__promo-input');
  const summaryCost = getHtmlElement(document, '.summary__price');
  const summaryCostDiscount = getHtmlElement(document, '.summary__price-promo');
  if (input instanceof HTMLInputElement) {
    const promoName = input.value;
    let promoDiscount = 0;
    discounts.forEach((discount) => {
      if (discount[0] === promoName) {
        promoDiscount = discount[1];
      }
    });
    promoCodes.name.push(promoName);
    promoCodes.percentDicsount.push(promoDiscount);
    summaryCost.classList.add('cross-out');
    summaryCostDiscount.classList.remove('cart-hide');
    changeSummaryCost(inCart, promoCodes);
    stylePromo();
    createPromoBlock(promoCodes);
  }
}

function getDiscountNameByBLock(block: Element): number {
  let deleteIndex = 0;
  const nameElement = getHtmlElement(block, '.applied-name');
  const promoName = nameElement.textContent?.slice(0, -3);
  promoCodes.name.forEach((name, index) => {
    if (name === promoName) {
      deleteIndex = index;
    }
  });
  return deleteIndex;
}

export function delPromocode(event: Event) {
  const promoBlocks = document.querySelectorAll('.applied-code');
  const dropButton = event.target;
  if (dropButton instanceof HTMLButtonElement) {
    if (promoBlocks.length) {
      promoBlocks.forEach((block) => {
        if (block.contains(dropButton)) {
          block.outerHTML = '';
          const delIndex = getDiscountNameByBLock(block);
          promoCodes.name.splice(delIndex, 1);
          promoCodes.percentDicsount.splice(delIndex, 1);
          changeSummaryCost(inCart, promoCodes);
        }
      });
    }
  }
  if (promoCodes.name.length === 0) {
    const promoBlock = getHtmlElement(document, '.summary__promo-applied');
    promoBlock.classList.add('cart-hide');
    const fullPrice = getHtmlElement(document, '.summary__price');
    fullPrice.classList.remove('cross-out');
    const discountPrice = getHtmlElement(document, '.summary__price-promo');
    discountPrice.classList.add('cart-hide');
  }
}

export function addDelPromocode() {
  const addButton = getHtmlElement(document, '.summary__promo-apply');
  addButton.addEventListener('click', addPromocode);
}
