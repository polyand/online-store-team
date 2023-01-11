import { compareNumeric } from '../src/utils/helpersArray';

describe('when two numbers a and b are passed', () => {
  const testCases = [
    { a: 2, b: 1, result: 1, unit: '>' },
    { a: 5.6, b: -4, result: 1, unit: '>' },
    { a: 0, b: 1, result: -1, unit: '<' },
    { a: -10, b: -2.3, result: -1, unit: '<' },
    { a: 2, b: 2, result: 0, unit: '=' },
    { a: -5, b: -5, result: 0, unit: '=' },
    { a: 0, b: 0, result: 0, unit: '=' },
  ];
  testCases.forEach((test) => {
    it(`should return the number ${test.result} if ${test.a} ${test.unit} ${test.b}`, () => {
      const result: number = compareNumeric(test.a, test.b);
      const expected: number = test.result;
      expect(result).toEqual(expected);
    });
  });
});