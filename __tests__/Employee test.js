const Employee = require("../library/employee");

describe("Employee", () => {
  it("Creating Employee Profile", () => {
      const e = new Employee();
      expect(typeof(e)).toBe("object");
  });

  it("Let's get the person's email via the constructor", () => {
    const testValue = "kendrick@pgLang.com";
    const e = new Employee("Kendrick", 1, testValue);
    expect(e.email).toBe(testValue);
});

it("Let's get the person's ID via the constructor", () => {
  const testValue = 24;
  const e = new Employee("Kendrick", testValue);
  expect(e.id).toBe(testValue);
});

  it("Let's get the person's name via the constructor", () => {
      const name = "Kendrick";
      const e = new Employee(name);
      expect(e.name).toBe(name);
  });

  describe("getEmail", () => {
    it("Let's get the person's via getEmail()", () => {
        const testValue = "kendrick@pgLang.com";
        const e = new Employee("Kendrick", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });
});
      
  describe("getID", () => {
      it("Let's get the person's via getID()", () => {
          const testValue = 24;
          const e = new Employee("Kendrick", testValue);
          expect(e.getID()).toBe(testValue);
      });
  });

  describe("getName", () => {
    it("Let's get the person's name via getName()", () => {
        const testValue = "Kendrick";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });
});

  describe("getRole", () => {
      it("getRole() should return \"Employee\"", () => {
          const testValue = "Placeholder";
          const e = new Employee("Kendrick", 1, "kendrick@pgLang.com");
          expect(e.getRole()).toBe(testValue);
      });
  });
});