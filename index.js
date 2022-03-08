const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/utils/generateHTML");

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
      name: "email"
      message: "Please enter the team member's email:" 
    }
}])

.then(function ({ name, id, role, email }) {
  let roleInfo = "";
  if (role === "Intern") {
    roleInfo = "college name";
   } else if (role === "Engineer") {
     roleInfo = "Github username";
   } else (role === "Manager") {
     roleInfo = "Office phone number";
   });

.then(function({addInfo, addNewTeamMember}) 
    {
      let addTeamMember;
      if (role === "Intern"){
        addTeamMember = new Intern(name, id, role, email);
      } else if (role === "Engineer"){
        addTeamMember = new Intern(name, id, role, email);
      } else (role === "Manager"){
        addTeamMember = new Intern(name, id, role, email);
      }
      teammembers.push(addTeamMember);
      addCard(addTeamMember).then(function() {
        if (moreTeamMembers === "yes") {
          addTeamMember();
          } else {
            endPage();
          }
        });
      });
    });
  }

  function topHTML() {
        var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel='stylesheet' href='./style.css'>
    </head>
    <body>
        <div class="container-fluid">
            <div id='headerRow' class='row justify-content-md-center'>
                <div class='col-12' id='header'>
                    <p>My Team</p>
                </div>
            </div>
            <div id='main' class='row justify-content-center'>
        `;
        //Takes the above text and throws it into an HTML
        fs.writeFile("./dist/team.html", html, function(err) {
            if (err) {
                console.log(err)
            }
        })
    }

        //More html to inject into the file before it is fully complete.
        var cardHTML = `<div id='card' class='col-2'>
        <div class='row align-items-center'>
            <div id='cardHeader' class='col-12'>
                <p class='name'>${name}</p>
                <p class='position'>${role}</p>
            </div>
            <div id='cardBody' class='col-12'>
                <div class='infodiv'>
                    <p class='info'>ID: ${id}</p>
                </div>
                <div class='infodiv'>
                    <p class='info'>Email: <a href="mailto:${email}">${email}</a></p>
                </div>
                <div class='infodiv'>
                    <p class='info'>${special}</p>
                </div>
            </div>
        </div>
    </div>
        `
        fs.appendFile("./dist/team.html", cardHTML, function(err) {
            if (err) {
                console.log(err)
            }
        })
    }
    
    function bottomHTML() {
    
        //Final bit of html to close off div elements in addition to scripts
        var html = `</div>
        </div>
        <!-- Scripts for Bootstrap -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script>
    </body>
    </html>
        `
        fs.appendFile("./dist/team.html", html, function(err) {
            if (err) {
                console.log(err)
            }
        })
    }

init();