const mockAPI = require('../server/mockAPI');

describe('Test MockApi', () => {
  it('Check if values are the same', () => {
    expect(mockAPI.title).toBe('test json response');
    expect(mockAPI.message).toBe('this is a message');
    expect(mockAPI.time).toBe('now');
  });
})