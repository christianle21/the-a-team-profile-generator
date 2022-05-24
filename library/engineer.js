const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(email, id, gitHub, name) {
    super(email, id, name);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;