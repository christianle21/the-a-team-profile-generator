const Manager = require("../library/manager");

describe('Manager test', () => {
  test('Manager test getOfficeNumber()', () => {
      const manager = new Manager('Christian', '619', 'christian@pleasehire.com', '69')
      expect(manager.getOfficeNumber()).toBe('69')

  })
  test('Manager test getRole()', () => {
      const manager = new Manager('Millie', '619', 'christian@pleasehire.com', '69')
      expect(manager.getRole()).toBe('Manager')

  })


})