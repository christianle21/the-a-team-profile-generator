const Engineer = require("../library/engineer");

describe("Engineer", () => {
  const name = "Dave";
  const id = 2;
  const email = "davefree@pgLang.com";
  const gitHub = "github.com/davefree";
  const dave = new Engineer(email, gitHub, id, name);

  test("new Engineer instance's email should be set to pass in argument", () => {
    expect(dave.email).toBe(email);
  });

  test("new Engineer instance's github should be set to pass in argument", () => {
    expect(dave.gitHub).toBe(gitHub);
  });

  test("new Engineer instance's id should be set to pass in argument", () => {
    expect(dave.id).toBe(id);
  });

  test("new Engineer instance's name should be set to pass in argument", () => {
    expect(dave.name).toBe(name);
  });

  test("getName method should return engineer's name", () => {
    const daveName = dave.getName();
    expect(daveName).toBe(name);
  });

  test("getEmail method should return engineer's email", () => {
    const daveEmail = dave.getEmail();
    expect(daveEmail).toBe(email);
  });

  test("getGitHub method should return engineer's gitHub address", () => {
    const daveGitHub = dave.getGitHub();
    expect(daveGitHub).toBe(gitHub);
  });

  test("getId method should return engineer's id", () => {
    const daveId = dave.getId();
    expect(daveId).toBe(id);
  });

  test("getRole method should return 'Engineer'", () => {
    const daveRole = dave.getRole();
    expect(daveRole).toBe("Engineer");
  });
});