const Employee = require("../library/employee");

describe('Employee test', () => {
    test('Employee test getEmail()', () => {
        const employee = new Employee('christian@pleasehire.com', '619', 'Christian')
        expect(employee.getEmail()).toBe('christian@pleasehire.com')
  })

  test('Employee test getId()', () => {
    const employee = new Employee('christian@pleasehire.com', '619', 'Christian')
    expect(employee.getId()).toBe('619')

})
  
      test('Employee test getName()', () => {
        const employee = new Employee('christian@pleasehire.com', '619', 'Christian')
        expect(employee.getName()).toBe('Christian')
  })
  
  test('Employee test getRole()', () => {
      const employee = new Employee('christian@pleasehire.com', '619', 'Christian')
      expect(employee.getRole()).toBe('Employee')

  })
})