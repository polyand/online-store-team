import { getHtmlElement } from 'utils/getHtmlElement';
import { getInputElement } from 'utils/getInputElement';
import { setQueries } from 'utils/queries';
import { inCart, saveProductsInCart } from 'utils/saveCart';
import { ValidateFunction } from 'utils/types';
import { validateAdress } from './validate-adress';
import { validateCardCvv } from './validate-card-cvv';
import { validateCardDate } from './validate-card-date';
import { validateCardNum } from './validate-card-num';
import { validateEmail } from './validate-email';
import { validateName } from './validate-name';
import { validateTel } from './validate-tel';
import { warningMsg } from './warning-texts';

const isValid = {
  name: false,
  tel: false,
  adress: false,
  email: false,
  cardNum: false,
  cardDate: false,
  cardCvv: false,
};

function getPersonalWarnMsg(input: HTMLInputElement, id: string, func: ValidateFunction) {
  const warningMsgBlock = getHtmlElement(document, `.modal__form-validity-${id}`);
  if (func(input)) {
    const message = warningMsgBlock.querySelector('.msg');
    if (message !== null) {
      message.outerHTML = '';
    }
    isValid[id] = true;
  } else {
    let message = warningMsgBlock.querySelector('.msg');
    if (message === null) {
      message = document.createElement('div');
      message.textContent = warningMsg[id];
      message.className = 'msg';
      warningMsgBlock.append(message);
    }
    isValid[id] = false;
  }
}

function getCardWarnMsg(input: HTMLInputElement, id: string, func: ValidateFunction) {
  const warningMsgBlock = getHtmlElement(document, '.modal__form-validity-card');
  if (func(input)) {
    const message = warningMsgBlock.querySelector(`.${id}`);
    if (message !== null) {
      message.outerHTML = '';
    }
    isValid[id] = true;
  } else {
    let message = warningMsgBlock.querySelector(`.${id}`);
    if (message === null) {
      message = document.createElement('div');
      message.textContent = warningMsg[id];
      message.className = `${id}`;
      warningMsgBlock.append(message);
    }
    isValid[id] = false;
  }
}

function changeCardImage(input: HTMLInputElement): void {
  const firstNum = input.value[0];
  const cardImage = getHtmlElement(document, '.credit-card__body-image');
  const urls = {
    3: '../../assets/img/ae-logo.png',
    4: '../../assets/img/v-logo.png',
    5: '../../assets/img/mc-logo.png',
  };
  if (cardImage instanceof Image) {
    if (urls[firstNum]) {
      cardImage.src = urls[firstNum];
    } else {
      cardImage.src = '../../assets/img/unknown-card.png';
    }
  }
}

export function showWarningMsg(change: Event): void {
  const input = change.target;
  if (input instanceof HTMLInputElement) {
    const inputId = input.id;
    switch (inputId) {
      case 'name':
        getPersonalWarnMsg(input, 'name', validateName);
        break;
      case 'tel':
        getPersonalWarnMsg(input, 'tel', validateTel);
        break;
      case 'adress':
        getPersonalWarnMsg(input, 'adress', validateAdress);
        break;
      case 'email':
        getPersonalWarnMsg(input, 'email', validateEmail);
        break;
      case 'cardNum':
        getCardWarnMsg(input, 'cardNum', validateCardNum);
        changeCardImage(input);
        break;
      case 'cardDate':
        getCardWarnMsg(input, 'cardDate', validateCardDate);
        break;
      case 'cardCvv':
        getCardWarnMsg(input, 'cardCvv', validateCardCvv);
        break;
    }
  }
}

export function showMsgByClick(event: Event) {
  event.preventDefault();
  const nameInput = getInputElement(document, '.modal__form-name');
  const telInput = getInputElement(document, '.modal__form-tel');
  const adressInput = getInputElement(document, '.modal__form-adress');
  const emailInput = getInputElement(document, '.modal__form-email');
  const cardNumInput = getInputElement(document, '.credit-card__body-number');
  const cardDateInput = getInputElement(document, '.credit-card__body-date');
  const cardCvvInput = getInputElement(document, '.credit-card__body-cvv');
  getPersonalWarnMsg(nameInput, 'name', validateName);
  getPersonalWarnMsg(telInput, 'tel', validateTel);
  getPersonalWarnMsg(adressInput, 'adress', validateAdress);
  getPersonalWarnMsg(emailInput, 'email', validateEmail);
  getCardWarnMsg(cardNumInput, 'cardNum', validateCardNum);
  getCardWarnMsg(cardDateInput, 'cardDate', validateCardDate);
  getCardWarnMsg(cardCvvInput, 'cardCvv', validateCardCvv);
  let isSubmit = true;
  for (const key in isValid) {
    if (!isValid[key]) {
      isSubmit = false;
    }
  }
  if (isSubmit) {
    const header = getHtmlElement(document, '.modal__header');
    const form = getHtmlElement(document, '.modal__form');
    const completeMsg = getHtmlElement(document, '.modal-complete');
    header.classList.add('modal-hide');
    form.classList.add('modal-hide');
    completeMsg.classList.remove('modal-hide');
    setTimeout(() => {
      setQueries({ name: 'modal' });
      inCart.id = [];
      inCart.amount = [];
      saveProductsInCart();
      window.location.pathname = '/';
      header.classList.remove('modal-hide');
      form.classList.remove('modal-hide');
      completeMsg.classList.add('modal-hide');
    }, 3000);
  }
}
