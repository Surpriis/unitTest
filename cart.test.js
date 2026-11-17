const { calculateTotal } = require('./cart');

test('tühi ostukorv maksab 0 eurot', () => {
  expect(calculateTotal([])).toBe(0);
});

test('ostukorv 40 eurot + 5 eurot saatmiskulu = 45 eurot', () => {
  expect(calculateTotal([{ price: 20, qty: 2 }])).toBe(45);
});

test('ostukorv 80 eurot + 5 eurot saatmiskulu = 85 eurot', () => {
  expect(calculateTotal([{ price: 10, qty: 3 }, { price: 25, qty: 2 }])).toBe(85);
});

test('ostukorv 99 eurot + 5 eurot saatmiskulu = 104 eurot', () => {
  expect(calculateTotal([{ price: 99, qty: 1 }])).toBe(104);
});

test('ostukorv 100 eurot ei lisa saatmiskulu = 100 eurot', () => {
  expect(calculateTotal([{ price: 100, qty: 1 }])).toBe(100);
});

test('ostukorv 100 eurot ja kood STUDENT10 = 90 eurot', () => {
  expect(calculateTotal([{ price: 100, qty: 1 }], 'STUDENT10')).toBe(90);
});

test('FREESHIP teeb saatmise tasuta', () => {
  expect(calculateTotal([{ price: 10, qty: 1 }], 'FREESHIP')).toBe(10);
});
