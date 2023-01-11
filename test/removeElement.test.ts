import { removeElement } from '../src/utils/helpersArray';

describe('when passed array and element', () => {
  const testCases = [
    { array: [1, 2, 3, 4, 5], element: 3, result: [1, 2, 4, 5] },
    { array: ['str'], element: 'str', result: [] },
    { array: [true, false, true], element: false, result: [true, true] },
  ];
  testCases.forEach((test) => {
    it('element must be removed from the array', () => {
      type T = typeof test.element;
      removeElement<T>(test.array, test.element);
      const result: T[] = test.array;
      const expected: T[] = test.result;
      expect(result).toEqual(expected);
    });
  });
});
