const Employee = require("../library/employee");

describe("Employee", () => {
  const name = "Tanna";
  const id = 1;
  const email = "tanna@pgLang.com";
  const kendrick = new Employee(email, id, name);

  test("new Employee instance's email should be set to pass in argument", () => {
    expect(tanna.email).toBe(email);
  });

  test("new Employee instance's id should be set to pass in argument", () => {
    expect(tanna.id).toBe(id);
  });

  test("new Employee instance's name should be set to pass in argument", () => {
    expect(tanna.name).toBe(name);
  });

  test("getEmail method should return employee's email", () => {
    const tannaEmail = tanna.getEmail();
    expect(tannaEmail).toBe(email);
  });

  test("getId method should return employee's id", () => {
    const tannaId = tanna.getId();
    expect(tannaId).toBe(id);
  });

  test("getName method should return employee's name", () => {
    const tannaName = tanna.getName();
    expect(tannaName).toBe(name);
  });

  test("getRole method should return 'Employee'", () => {
    const tannaRole = tanna.getRole();
    expect(tannaRole).toBe("Employee");
  });
});