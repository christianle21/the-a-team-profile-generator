const Intern = require("../library/intern");

describe('intern test', () => {
  test('it test getSchool()', () => {
      const intern = new Intern('Christian', '619', 'christian@pleasehire.com', 'SDSU')
      expect(intern.getSchool()).toBe('UW')

  })
  test('ntern test getRole()', () => {
      const intern = new Intern('Christian', '619', 'christian@pleasehire.com', 'SDSU')
      expect(intern.getRole()).toBe('Intern')

  })
})