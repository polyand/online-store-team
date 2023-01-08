import { addElement } from '../src/utils/helpersArray';

describe('when passed array and element', () => {
  const testCases = [
    { array: [1, 2, 3, 4], element: 5, result: [1, 2, 3, 4, 5] },
    { array: [], element: 'str', result: ['str'] },
    { array: [true, false, true], element: true, result: [true, false, true, true] },
  ];
  testCases.forEach((test) => {
    it('element must be added to the end of the array', () => {
      type T = typeof test.element;
      addElement<T>(test.array, test.element);
      const result: T[] = test.array;
      const expected: T[] = test.result;
      expect(result).toEqual(expected);
    });
  });
});
