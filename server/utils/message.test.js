const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Gino';
    const text = 'Some Message'
    const message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toEqual(expect.objectContaining({from, text}))
  })
});