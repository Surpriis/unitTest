const { calculateTotal } = require('./cart');

test('tühi ostukorv maksab 0 eurot', () => {
  expect(calculateTotal([])).toBe(0);
});
test('Ostukorv maksab 45 eurot', () => {
  expect(calculateTotal([{ price: 20, qty: 2 }])).toBe(45);
});
test('Ostukorv maksab 85 eurot', () => {
  expect(calculateTotal([{ price: 10, qty: 3 }, { price: 25, qty: 2 }])).toBe(85);
});
test('Ostukorv maksab 100 eurot ja kood STUDENT10', () => {
  expect(calculateTotal([{ price: 100, qty: 1 }], "STUDENT10")).toBe(90);
});
test('stukorv maksab 0 eurot', () => {
  expect(calculateTotal([{ price: 99, qty: 1 }])).toBe(104);
});
test('Ostukorv maksab 45 eurot kask tooted 20 euro', () => {
  expect(calculateTotal([{ price: 100, qty: 1 }])).toBe(100);
});
test('annab vea, kui items ei ole massiiv', () => {
  expect(() => calculateTotal('abc')).toThrow();
});
test('FREESHIP teeb saatmise tasuta', () => {
  expect(calculateTotal(
    [{ price: 10, qty: 1 }],
    'FREESHIP'
  )).toBe(10);
});
