import jsdom from 'jsdom';
import { describe, it, expect } from '@jest/globals';
import { triggerEmptyCart } from '../src/pages/cart/cart-utils/trigger-empty-cart';

const { JSDOM } = jsdom;

const getDomStub = (markup: string): void => {
  const dom = new JSDOM(markup);
  global.window = dom.window as unknown as Window & typeof globalThis;
  global.document = dom.window.document;
};

jest.mock('../src/utils/getHtmlElement', () => {
  return {
    __esModule: true,
    getHtmlElement: jest.fn((a, selector) => document.querySelector(selector)),
  };
});

describe('When called triggerEmptyCart', () => {
  it('Should toggle classes to empty and fill elements', () => {
    getDomStub(`
      <html>
        <body>
          <div class='cart-wrapper__empty cart-hide'></div>
          <div class='cart-wrapper__fill'></div>
        </body>
      </html>
    `);
    const empty = document.querySelector('.cart-wrapper__empty');
    const fill = document.querySelector('.cart-wrapper__fill');
    triggerEmptyCart();
    expect(empty?.classList.contains('cart-hide')).toBeFalsy();
    expect(fill?.classList.contains('cart-hide')).toBeTruthy();
  });
});
