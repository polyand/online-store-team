import { describe, it, expect } from '@jest/globals';
import { getTotalAmount } from '../src/utils/getTotalAmount';

describe('When called getTotalAmount', () => {
  it('Should return amount of products in cart', () => {
    const inCart = {
      id: [1, 2, 3],
      amount: [10, 20, 30],
    };
    const result = getTotalAmount(inCart);
    expect(result).toBe(60);
  });

  it('Should return zero if cart are empty', () => {
    const inCart = {
      id: [],
      amount: [],
    };
    const result = getTotalAmount(inCart);
    expect(result).toBe(0);
  });
});
