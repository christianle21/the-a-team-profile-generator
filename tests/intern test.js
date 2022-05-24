const Intern = require("../library/intern");

describe("Intern", () => {
  const name = "Hykeem";
  const id = 3;
  const email = "hykeem@pgLang.com";
  const school = "University of Nevada, Las Vegas";
  const hykeem = new Intern(email, id, name, school);

  test("new Intern instance's email should be set to pass in argument", () => {
    expect(hykeem.email).toBe(email);
  });

  test("new Intern instance's id should be set to pass in argument", () => {
    expect(hykeem.id).toBe(id);
  });

  test("new Intern instance's name should be set to pass in argument", () => {
    expect(hykeem.name).toBe(name);
  });

  test("new Intern instance's school should be set to pass in argument", () => {
    expect(hykeem.school).toBe(school);
  });

  test("getEmail method should return intern's email", () => {
    const hykeemEmail = hykeem.getEmail();
    expect(hykeemEmail).toBe(email);
  });

  test("getId method should return intern's id", () => {
    const hykeemId = hykeem.getId();
    expect(hykeemId).toBe(id);
  });

  test("getName method should return intern's name", () => {
    const hykeemName = hykeem.getName();
    expect(hykeemName).toBe(name);
  });

  test("getSchool method should return intern's school", () => {
    const hykeemSchool = hykeem.getSchool();
    expect(hykeemSchool).toBe(school);
  });

  test("getRole method should return 'Intern'", () => {
    const hykeemRole = hykeem.getRole();
    expect(hykeemRole).toBe("Intern");
  });
});