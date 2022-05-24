const Manager = require("../library/manager");

test("Let's get their office number via constructor argument", () => {
  const testValue = 24;
  const e = new Manager("Kendrick", 1, "kendrick@pgLang.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Kendrick", 1, "kendrick@pgLang.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Let's get their office number via getOffice()", () => {
  const testValue = 24;
  const e = new Manager("Kendrick", 1, "kendrick@pgLang.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});