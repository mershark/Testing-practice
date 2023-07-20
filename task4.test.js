const capitalize = require('./task4');

test('capitalize function capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
