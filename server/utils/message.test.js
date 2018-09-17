const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Gino';
    const text = 'Some Message'
    const message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toEqual(expect.objectContaining({from, text}))
  })
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Gino';
    const latitude = 1;
    const longitude = 1;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const message = generateLocationMessage(from, latitude, longitude);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toEqual(
      expect.objectContaining({
        from,
        url
      }))
  })
})