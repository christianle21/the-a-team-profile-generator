const Intern = require("../library/intern");

describe('Intern test', () => {
  test('Intern test getSchool()', () => {
      const intern = new Intern('christian@pleasehire.com', '619', 'Christian', 'SDSU')
      expect(intern.getSchool()).toBe('SDSU')

  })
  test('Intern test getRole()', () => {
      const intern = new Intern('christian@pleasehire.com', '619', 'Christian', 'SDSU')
      expect(intern.getRole()).toBe('Intern')

  })
})