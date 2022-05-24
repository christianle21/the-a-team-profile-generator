const Engineer = require("../library/engineer");

test("Let's get the employee's github username via the extended constructor", () => {
  const testValue = "Kendrick";
  const e = new Engineer("Kendrick", 1, "kendrick@pgLang.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return 'Engineer'", () => {
  const testValue = "Engineer";
  const e = new Engineer("Kendrick", 1, "kendrick@pgLang.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Let's get their GitHub username via getGitHub()", () => {
  const testValue = "Kendrick";
  const e = new Engineer("Kendrick", 1, "kendrick@pgLang.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});