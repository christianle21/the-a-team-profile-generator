const Manager = require("../library/manager");

describe("Manager", () => {
  const name = "Kendrick";
  const id = 4;
  const email = "kendrick@pgLang.com";
  const officeNumber = 3104240522;
  const kendrick = new Manager(email, id, name, officeNumber);

  test("new Manager instance's email should be set to pass in argument", () => {
    expect(kendrick.email).toBe(email);
  });

  test("new Manager instance's id should be set to pass in argument", () => {
    expect(kendrick.id).toBe(id);
  });

  test("new Manager instance's name should be set to pass in argument", () => {
    expect(kendrick.name).toBe(name);
  });

  test("new Manager instance's officeNumber should be set to pass in argument", () => {
    expect(kendrick.officeNumber).toBe(officeNumber);
  });

  test("getEmail method should return manager's email", () => {
    const kendrickEmail = kendrick.getEmail();
    expect(kendrickEmail).toBe(email);
  });
  
  test("getId method should return manager's id", () => {
    const kendrickId = kendrick.getId();
    expect(kendrickId).toBe(id);
  });

  test("getName method should return manager's name", () => {
    const kendrickName = kendrick.getName();
    expect(kendrickName).toBe(name);
  });

  test("getRole method should return 'Manager'", () => {
    const kendrickRole = kendrick.getRole();
    expect(kendrickRole).toBe("Manager");
  });
});