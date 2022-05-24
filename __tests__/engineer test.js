const Engineer = require("../library/engineer");

describe('engineer test', () => {
  test('Engineer test getGithub()', () => {
      const engineer = new Engineer('Christian', '619', 'christian@pleasehire.com', 'Christianle21')
      expect(engineer.getGithub()).toBe('Christianle21')

  })
  test('Engineer test getRole()', () => {
      const engineer = new Engineer('Christian', '619', 'christian@pleasehire.com', 'Christianle21')
      expect(engineer.getRole()).toBe('Engineer')

  })
})