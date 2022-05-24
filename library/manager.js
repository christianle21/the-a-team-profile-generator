const Employee = require("./Employee");

class Manager extends Employee {
  constructor(email, id, name, officeNumber) {
        super(email, id, name);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;