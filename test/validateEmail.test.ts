import { describe, it, expect } from '@jest/globals';
import { validateEmail } from '../src/components/modal/modal-utils/validate-email';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const getDomStub = (email: string): void => {
  const dom = new JSDOM(`
  <html>
    <body>
      <input id='input' value = ${email}>
    </body>
  </html>
  `);
  global.window = dom.window as unknown as Window & typeof globalThis;
  global.document = dom.window.document;
};

describe('When called validateEmail', () => {
  it(`Should return true on valid email`, () => {
    getDomStub('email@exapmle.com');
    const input = document.querySelector('#input') as HTMLInputElement;
    const result = validateEmail(input);
    expect(result).toBeTruthy();
  });

  it(`Should return false on invalid email`, () => {
    getDomStub('email@exapmlecom');
    const input = document.querySelector('#input') as HTMLInputElement;
    const result = validateEmail(input);
    expect(result).toBeFalsy();
  });

  it(`Should return false on invalid email`, () => {
    getDomStub('email@.com');
    const input = document.querySelector('#input') as HTMLInputElement;
    const result = validateEmail(input);
    expect(result).toBeFalsy();
  });

  it(`Should return false on invalid email`, () => {
    getDomStub('emailexapmle.com');
    const input = document.querySelector('#input') as HTMLInputElement;
    const result = validateEmail(input);
    expect(result).toBeFalsy();
  });

  it(`Should return false on empty input`, () => {
    getDomStub('');
    const input = document.querySelector('#input') as HTMLInputElement;
    const result = validateEmail(input);
    expect(result).toBeFalsy();
  });
});
