const Intern = require("../library/intern");

test("Let's get their school via constructor", () => {
  const testValue = "USC";
  const e = new Intern("Kendrick", 1, "kendrick@pgLang.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Kendrick", 1, "kendrick@pgLang.com", "USC");
  expect(e.getRole()).toBe(testValue);
});

test("Let's get their school via getSchool()", () => {
  const testValue = "USC";
  const e = new Intern("Kendrick", 1, "kendrick@pgLang.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});