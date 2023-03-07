const stringLength = require('../string');

test('String equals to', () => {
  expect(stringLength("sattar")).toBe(6);
});

test('String equals to', () => {
  expect(stringLength("BaqarAbbas")).toBe(10);
});

test('String equals to', () => {
  expect(() => {stringLength("");}).toThrow();
});

