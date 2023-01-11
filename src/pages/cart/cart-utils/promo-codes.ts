import { getHtmlElement } from 'utils/getHtmlElement';
import { DiscountProperties, Promocodes } from 'utils/types';

export const promoCodes: Promocodes = {
  name: [],
  percentDicsount: [],
};

export const discounts: DiscountProperties = [
  ['RSSchool', 10],
  ['2022Q3', 20],
];

function checkValidityPromo(input: HTMLInputElement): boolean {
  const rexExp = /(RSSchool|2022Q3)$/i;
  const promocode = input.value;
  return rexExp.test(promocode);
}

function checkExistPromo(input: HTMLInputElement, promoObj: Promocodes): boolean {
  let isExist = true;
  const promocode = input.value;
  promoObj.name.forEach((name) => {
    if (name === promocode) {
      isExist = false;
    }
  });
  return isExist;
}

export function stylePromo() {
  const buttonAdd = getHtmlElement(document, '.summary__promo-apply');
  const input = getHtmlElement(document, '.summary__promo-input');
  if (input instanceof HTMLInputElement && buttonAdd instanceof HTMLButtonElement) {
    const isValid = checkValidityPromo(input);
    const isExist = checkExistPromo(input, promoCodes);
    if (isValid && isExist) {
      buttonAdd.disabled = false;
      input.classList.add('valid');
    } else {
      buttonAdd.disabled = true;
      input.classList.remove('valid');
    }
  }
}
