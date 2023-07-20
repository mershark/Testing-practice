const stringLength = require('./task1.js');

test('stringLength returns the correct character count', () => {
  expect(() => stringLength('Hello, world!')).toThrow('The string must be between 1 and 10 characters long.');
  expect(stringLength('')).toBe(0);
  expect(stringLength('123456789')).toBe(9);
});

test('stringLength throws an error for strings shorter than 1 character', () => {
  expect(() => stringLength('')).toThrow('The string must be between 1 and 10 characters long.');
  expect(() => stringLength('a')).not.toThrow();
});

test('stringLength throws an error for strings longer than 10 characters', () => {
  expect(() => stringLength('This is too long.')).toThrow('The string must be between 1 and 10 characters long.');
  expect(() => stringLength('Short')).not.toThrow();
});
