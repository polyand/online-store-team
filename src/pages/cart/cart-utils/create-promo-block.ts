import { getHtmlElement } from 'utils/getHtmlElement';
import { Promocodes } from 'utils/types';
import { delPromocode } from './add-del-promocode';

export function createPromoBlock(promoObj: Promocodes) {
  const promoBlock = getHtmlElement(document, '.summary__promo-applied');
  promoBlock.innerHTML = '';
  promoBlock.classList.remove('cart-hide');
  const header = document.createElement('div');
  header.className = 'applied-header';
  header.textContent = 'Applied codes';
  promoBlock.append(header);
  promoObj.name.forEach((name, index) => {
    const code = document.createElement('div');
    code.className = 'applied-code';
    const codeName = document.createElement('span');
    codeName.className = 'applied-name';
    codeName.textContent = `${name} - `;
    const discount = document.createElement('span');
    discount.className = 'applied-disc';
    discount.textContent = `${promoObj.percentDicsount[index]}% - `;
    const dropButton = document.createElement('button');
    dropButton.className = 'applied-drop';
    dropButton.textContent = 'Drop';
    code.append(codeName);
    code.append(discount);
    code.append(dropButton);
    promoBlock.append(code);
  });
  const dropButton = document.querySelectorAll('.applied-drop');
  if (dropButton.length) {
    dropButton.forEach((button) => {
      button.addEventListener('click', delPromocode);
    });
  }
}
