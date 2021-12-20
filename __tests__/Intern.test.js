const Intern = require('../lib/Intern');

test('add Intern school', () => {
  const intern = new Intern('Tim', 1, 'o@email.com', 'University of Toronto');

  expect(intern.school).toBe('University of Toronto');
});

test('getSchool', () => {
  const intern = new Intern('Tim', 1, 'o@email.com', 'University of Toronto');

  expect(intern.getSchool()).toBe('University of Toronto');
});

test('getRole', () => {
  const intern = new Intern('Tim', 1, 'o@email.com', 'University of Toronto');

  expect(intern.getRole()).toBe('Intern');
});