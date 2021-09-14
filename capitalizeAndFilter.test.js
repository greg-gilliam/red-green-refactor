const capitalizeAndFilter = require ('./capitalizeAndFilter.js');

describe('capitalizeAndFilter', () => {
  it('Should capitalize the first letter of the string', () => {
    const strings = ['fancy', 'filigree', 'plain', 'jane'];
    const newStrings = capitalizeAndFilter(strings);
    expect(newStrings).toEqual(['Plain', 'Jane']);
  });
});
