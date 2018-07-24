const accentless = require('..');

describe('accentless()', () => {
  it('should convert a given string if it has accents/diacritics', () => {
    const string = 'München';
    expect(accentless(string)).toBe('Munchen');
  });

  it('should not convert a string if it doesnt have accents/diacritics', () => {
    const string = 'Buenos Aires';
    expect(accentless(string)).toBe('Buenos Aires');
  });
});
