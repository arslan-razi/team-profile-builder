const Employee = require('../lib/Employee');

test('add employee name', () => {
  const employee = new Employee ('Omar', 1, 'o@email.com');

  expect(employee.name).toBe('Omar');
});

test('add employee id', () => {
  const employee = new Employee ('Omar', 1, 'o@email.com');

  expect(employee.id).toBe(1);
});

test('add employee email', () => {
  const employee = new Employee ('Omar', 1, 'o@email.com');

  expect(employee.email).toBe('o@email.com');
});

test('getName', () => {
  const employee = new Employee('Omar', 1, 'o@email.com');

  expect(employee.getName()).toBe('Omar');
});

test('getId', () => {
  const employee = new Employee('Omar', 1, 'o@email.com');

  expect(employee.getId()).toBe(1);
});

test('getEmail', () => {
  const employee = new Employee('Omar', 1, 'o@email.com');

  expect(employee.getEmail()).toBe('o@email.com');
});

test('getRole', () => {
  const employee = new Employee('Omar', 1, 'o@email.com');

  expect(employee.getRole()).toBe('Employee');
});