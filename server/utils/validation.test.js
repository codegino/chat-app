const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const res = isRealString(98);
    expect(res).toBe(false)
  });

  it('should reject string with only spaces', () => {
    const res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space charaters', () => {
    const res = isRealString(' Gino   ');
    expect(res).toBe(true);
  });
});