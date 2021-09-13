const copyAndPush = require ('./copyAndPush.js');

describe('copyAndPush', () => {
  it('it should add the number 4 to the list of numbers', () => {
    const numbers = [1, 2, 3];
    const num = copyAndPush(numbers, 4);
    expect(num).toEqual([1, 2, 3, 4]);
  });
});
