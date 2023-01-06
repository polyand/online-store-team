import jsdom from 'jsdom';
import { describe, it, expect } from '@jest/globals';
import { getGlobalProductId } from '../src/utils/getGlobalProductId';

const { JSDOM } = jsdom;

const getDomStub = (url: string): void => {
  const dom = new JSDOM('', { url });
  global.window = dom.window;
};

describe('When called getGlobalProductId', () => {
  it('Should return the product id from url', () => {
    getDomStub('https://online-store.com/products/12?param=value');
    const result = getGlobalProductId();
    expect(result).toEqual(12);
  });

  it('Should return undefined when give invalid product path', () => {
    getDomStub('https://online-store.com/products');
    const result = getGlobalProductId();
    expect(result).toBeUndefined();
  });

  it('Should return undefined when give invalid product path', () => {
    getDomStub('https://online-store.com/products/id');
    const result = getGlobalProductId();
    expect(result).toBeUndefined();
  });
});
