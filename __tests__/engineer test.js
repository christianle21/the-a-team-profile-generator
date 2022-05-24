const Engineer = require("../library/engineer");

describe('Engineer test', () => {
  test('Engineer test getGitHub()', () => {
      const engineer = new Engineer('christian@pleasehire.com', '619', 'Christianle21', 'Christian')
      expect(engineer.getGitHub()).toBe('Christianle21')

  })
  test('Engineer test getRole()', () => {
      const engineer = new Engineer('christian@pleasehire.com', '619', 'Christianle21', 'Christian')
      expect(engineer.getRole()).toBe('Engineer')

  })
})