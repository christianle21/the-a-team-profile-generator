const Employee = require("../library/employee");

describe('Employee test', () => {
  test('Employee test getName()', () => {
      const employee = new Employee('Christian', '619', 'christian@pleasehire.com')
      expect(employee.getName()).toBe('Christian')
  })
  test('Employee test getId()', () => {
      const employee = new Employee('Christian', '619', 'christian@pleasehire.com')
      expect(employee.getId()).toBe('619')

  })
  test('Employee test getEmail()', () => {
      const employee = new Employee('Christian', '619', 'christian@pleasehire.com')
      expect(employee.getEmail()).toBe('christian@pleasehire.com')

  })
  test('Employee test getRole()', () => {
      const employee = new Employee('Christian', '619', 'christian@pleasehire.com')
      expect(employee.getRole()).toBe('Employee')

  })
})