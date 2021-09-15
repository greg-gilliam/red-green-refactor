const fetchQuotes = require ('./fetchQuotes.js');

describe('fetchQuotes', () => {
  it('should return a list of quotes', async () => {
    const quotes = fetchQuotes();
    expect(quotes).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    });
  });
});
