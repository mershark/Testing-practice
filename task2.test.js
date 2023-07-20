const reverseString = require('./task2.js');

test('reverseString reverses the input string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('')).toBe('');
  expect(reverseString('a')).toBe('a');
  expect(reverseString('12345')).toBe('54321');
});
