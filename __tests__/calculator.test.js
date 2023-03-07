
const Calculator = require('../calculator');

describe('Calculator',()=>{
  test('add',()=>{
    const calculator = new Calculator();
    expect(calculator.add(9,2)).toBe(11);
  });
  test('subtract',()=>{
    const calculator = new Calculator();
    expect(calculator.subtract(9,2)).toBe(7);
  });
  test('multiply',()=>{
    const calculator = new Calculator();
    expect(calculator.multiply(9,2)).toBe(18);
  });
  test('divide',()=>{
    const calculator = new Calculator();
    expect(calculator.divide(12,2)).toBe(6);
  });
});