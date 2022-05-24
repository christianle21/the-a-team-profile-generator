const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');

const employees = [];

function init() {
    console.log("Let's Form Your Team!")
    startHtml();
    addTeamMember();
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the team member's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the team member's employee id:",
        },
        {
            type: "list",
            name: "role",
            message: "Please select the team member's role:",
            choices: [
                "Intern",
                "Engineer",
                "Manager",
            ],
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the team member's email:" 
        }])

        .then(function ({ email, id, name, role }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone #";
            }
            inquirer.prompt([{
                message: `Please enter team member's ${roleInfo}: `,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more people to your team?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreMembers",
            }])
                .then(function ({ roleInfo, moreMembers }) {
                    let newMember = "";
                    if (role === "Engineer") {
                        newMember = new Engineer(email, id, name, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(email, id, name, roleInfo);
                    } else {
                        newMember = new Manager(email, id, name, roleInfo);
                    }

                    employees.push(newMember);
                    addHtml(newMember)
                        .then(function () {
                            if (moreMembers === "yes") {
                                console.log("Let's add more team memebers!")
                                addTeamMember();

                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style.css"/>
    <title>My Team</title>
    <link
    rel="webtag icon"
    href="https://cdn0.iconfinder.com/data/icons/basic-ui-seo/64/users-512.png"
    alt="team icon"
  />
    <body>
    <nav class="navbar mb-5">
      <span class="navbar-brand mt-3 h1 w-100 text-center"><i class="bi bi-people-fill"></i>  My Team</span>
    </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("index.html", html, err => {
        if (err) {
            console.log(err);
        }

    });

}

function addHtml(member) {
    return new Promise(function (resolve, reject) {
        const email = member.getEmail();
        const id = member.getId();
        const name = member.getName();
        const role = member.getRole();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGitHub();
            data = `
            <div class="col table">
                <div class="card  mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><i class="bi bi-wrench">Engineer</i>
                    </h5>
                    <ul class="list-group list-group-flush">
                       <li class="list-group-item"><i class="bi bi-person"></i>  ${id}</li>
                       <li class="list-group-item"><i class="bi-mailbox"></i><a href="mailto: ${email}" target="_blank">  ${email}</a></li>
                       <li class="list-group-item"><i class="bi-github" role="img" aria-label="GitHub"></i><a href="https://github.com/${gitHub}" target="_blank">  ${gitHub}</a></li>
                    </ul>
                </div>
            </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col table">
            <div class="card mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br><i class="bi bi-person-badge">Intern</i></h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="bi bi-person"></i>  ${id}</li>
                <li class="list-group-item"><i class="bi-mailbox"></i><a href="mailto: ${email}" target="_blank">  ${email}</a></li>
                    <li class="list-group-item"><i class="bi bi-book"></i>  ${school}</li>
                </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col table">
            <div class="card mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><i class="bi bi-bookmark-star-fill"> Manager</i></h5>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item"><i class="bi bi-person"></i>  ${id}</li>
                  <li class="list-group-item"><i class="bi-mailbox"></i><a href="mailto: ${email}" target="_blank">  ${email}</a></li>
                    <li class="list-group-item"><i class="bi bi-telephone"></i>  ${officePhone}</li>
                  </ul>
            </div>
        </div>`
        }
        fs.appendFile("index.html", data, (err) => {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finishHtml() {
    const html = ` </div>
    </div>\
</body>
</html>`;

    fs.appendFile("index.html", html, (err) => {
        if (err) {
            console.log(err);
        };
    });
    console.log("Congrats! Your team profile has been created!");
}

init();