const Manager = require('../lib/Manager');

test('add Manager office number', () => {
  const manager = new Manager('Ahmad', 1, 'a@email.com', 10);

  expect(manager.officeNumber).toBe(10);
});

test('getOfficeNumber', () => {
  const manager = new Manager('Ahmad', 1, 'a@email.com', 10);

  expect(manager.getOfficeNumber()).toBe(10);
});

test('getRole', () => {
  const manager = new Manager('Ahmad', 1, 'a@email.com', 10);

  expect(manager.getRole()).toBe('Manager');
});