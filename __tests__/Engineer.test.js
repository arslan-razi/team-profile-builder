const Engineer = require('../lib/Engineer');

test('add Engineer GitHub Account', () => {
  const engineer = new Engineer('Omar', 1, 'o@email.com', 'omarelgamal');

  expect(engineer.github).toBe('omarelgamal');
});

test('getGitHub', () => {
  const engineer = new Engineer('Omar', 1, 'o@email.com', 'omarelgamal');

  expect(engineer.getGitHub()).toBe('omarelgamal');
});

test('getRole', () => {
  const engineer = new Engineer('Omar', 1, 'o@email.com', 'omarelgamal');

  expect(engineer.getRole()).toBe('Engineer');
});