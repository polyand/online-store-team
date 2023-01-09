import { describe, it, expect } from '@jest/globals';
import { validateCardDate } from '../src/components/modal/modal-utils/validate-card-date';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const getDomStub = (date: string): void => {
  const dom = new JSDOM(`
  <html>
    <body>
      <input id='input' value = ${date}>
    </body>
  </html>
  `);
  global.window = dom.window as unknown as Window & typeof globalThis;
  global.document = dom.window.document;
};

describe('When called validateDate', () => {
  it(`Should return true on valid card date`, () => {
    getDomStub('06/24');
    const input = document.querySelector('#input') as HTMLInputElement;
    const result = validateCardDate(input);
    expect(result).toBeTruthy();
  });

  it(`Should return false on invalid month`, () => {
    getDomStub('15/24');
    const input = document.querySelector('#input') as HTMLInputElement;
    const result = validateCardDate(input);
    expect(result).toBeFalsy();
  });

  it(`Should return false on year below 22`, () => {
    getDomStub('10/20');
    const input = document.querySelector('#input') as HTMLInputElement;
    const result = validateCardDate(input);
    expect(result).toBeFalsy();
  });

  it(`Should return false on empty input`, () => {
    getDomStub('');
    const input = document.querySelector('#input') as HTMLInputElement;
    const result = validateCardDate(input);
    expect(result).toBeFalsy();
  });
});
