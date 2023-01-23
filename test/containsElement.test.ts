import { containsElement } from '../src/utils/helpersArray';

describe('when passed array and element', () => {
  const testCases = [
    { array: [1, 2, 3, 4], element: 4, result: true },
    { array: [], element: 'str', result: false },
    { array: [true, false, true], element: true, result: true },
  ];
  testCases.forEach((test) => {
    it('should return true if the array contains an element / should return false if the array contains no element', () => {
      type T = typeof test.element;
      const result: boolean = containsElement<T>(test.array, test.element);
      const expected: boolean = test.result;
      expect(result).toEqual(expected);
    });
  });
});
