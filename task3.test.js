// calculator.test.js
const Calculator = require('./task3');

describe('Calculator - add()', () => {
  const calculator = new Calculator();

  test('should add two positive numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('should add a positive number and a negative number correctly', () => {
    expect(calculator.add(5, -3)).toBe(2);
  });

  test('should add two negative numbers correctly', () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });
});

describe('Calculator - subtract()', () => {
  const calculator = new Calculator();

  test('should subtract two positive numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('should subtract a positive number from a negative number correctly', () => {
    expect(calculator.subtract(-2, 3)).toBe(-5);
  });

  test('should subtract two negative numbers correctly', () => {
    expect(calculator.subtract(-5, -3)).toBe(-2);
  });
});

describe('Calculator - divide()', () => {
  const calculator = new Calculator();

  test('should divide two positive numbers correctly', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(4, 0)).toThrow('Division by zero is not allowed');
  });

  test('should divide a negative number by a positive number correctly', () => {
    expect(calculator.divide(-10, 2)).toBe(-5);
  });
});

describe('Calculator - multiply()', () => {
  const calculator = new Calculator();

  test('should multiply two positive numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('should multiply a positive number by a negative number correctly', () => {
    expect(calculator.multiply(5, -3)).toBe(-15);
  });

  test('should multiply two negative numbers correctly', () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });
});
