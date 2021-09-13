const getName = require ('./get-name.js');

describe('getName', () => {
  it('returns the name spot',  () => {
    const spot = getName({ name: 'spot', age: 5, weight: '20 lbs' });
    expect(spot).toEqual('spot');
  });

  it('returns the name Aang', () => {
    const character = getName({
      _id: '5cf5679a915ecad153ab68c9', 
      name: 'Aang' 
    });
    expect(character).toEqual('Aang');
  });
});
