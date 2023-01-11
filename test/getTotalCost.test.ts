import { describe, it, expect, jest } from '@jest/globals';
import { getProductData } from '../src/utils/getProductById';
import { getTotalCost } from '../src/utils/getTotalCost';

jest.mock('../src/utils/getProductById', () => {
  return {
    __esModule: true,
    getProductData: jest.fn<typeof getProductData>(() => {
      return {
        id: 1,
        title: '',
        description: '',
        price: 5,
        discount: 0,
        rating: 0,
        stock: 0,
        type: '',
        category: '',
        thumbnail: '',
        images: [''],
      };
    }),
  };
});

describe('When called getTotalCost', () => {
  it('Should return total cost string when give no promocode block', () => {
    const inCart = {
      id: [1, 1, 1],
      amount: [10, 20, 30],
    };
    const result = getTotalCost(inCart);
    expect(result).toEqual('300.00');
  });

  it('Should return correct string when give fraction value', () => {
    const inCart = {
      id: [1],
      amount: [10.5],
    };
    const result = getTotalCost(inCart);
    expect(result).toEqual('52.50');
  });

  it('Should return total cost string with promocode block', () => {
    const inCart = {
      id: [1, 1, 1],
      amount: [10, 20, 30],
    };
    const promo = {
      name: ['1', '2'],
      percentDicsount: [8.37, 14.5],
    };
    const result = getTotalCost(inCart, promo);
    expect(result).toEqual('231.39');
  });
});
