const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(email, id, gitHub, name) {
    super(email, id, name);
    this.gitHub = gitHub;
  }
  getRole() {
      return "Engineer";
  }
  getGitHub() {
      return this.gitHub;
  }
}

module.exports = Engineer;