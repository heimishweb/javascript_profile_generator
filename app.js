
const Manager = require('./lib/manager.js')
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const inquirer = require("inquirer")
// const path = require("path")
const fs = require("fs")






function appMenu() {

    createManager();
    function createManager() {
        console.log("Please build team")
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the ID number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What's the email ?"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What's the office number?"
            },
            {
                type: "input",
                name: "nextMemberType",
                message: "What type of member would you like to add? (if done, press Enter)"
            }
        ])
            .then(function (answers) {
                const managerObject = answers;
                //testing constructor here below..
                manager01 = new Manager(managerObject.managerName, managerObject.managerId, managerObject.managerEmail, managerObject.managerOffice)
                writeFileManager();
                if (answers.nextMemberType === "engineer") {
                    createEngineer();

                }
                else if (answers.nextMemberType === "intern") {
                    createIntern();
                }

                else {
                    writeEndHTML();

                    console.log("thanks for using this program!")
                }

            });
    }
}


appMenu();

//Writes beginning of HTML and Manager profile with 
function writeFileManager() {
    fs.writeFile("team.html", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Main</title>
      <link href="style.css" rel="stylesheet">
    </head>
    <body>
    
        <div class="row">

            <div class="col-md-8" id="header"><h1> My Team</h1> </div>
        </div>
          <div class="container">
              <h2 class="display-4">${manager01.name}</h2>
              <h2>Manager</h2>
              <p class="lead">Id:${manager01.id}.</p>
              <ul class="list-group">
                  <li class="list-group-item" width="300px">Email: ${manager01.email}</li>
                  <li class="list-group-item" width="300px">Office: ${manager01.office}</li>
              </ul>
          </div>
          <div class="row">
          <p></p>
          </div>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });
}

//Writes Engineer profile html code  
function writeFileEngineer() {
    fs.appendFile("team.html", `
    
          <div class="container">
              <h2 class="display-4">${engineer.name}</h2>
              <h2>Engineer</h2>
              <p class="lead">Id:${engineer.id}.</p>
              <ul class="list-group">
                  <li class="list-group-item">Email: ${engineer.email}</li>
                  <li class="list-group-item">Office: ${engineer.office}</li>
                  <li class="list-group-item">GitHub: ${engineer.github}</li>
              </ul>
          </div>
          <div class="row">
          <p></p>
          </div>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });
}

function writeFileIntern() {
    fs.appendFile("team.html", `
    
    <div class="container">
        <h2 class="display-4">${intern.name}</h2>
        <h2>Intern</h2>
        <p class="lead">Id:${intern.id}.</p>
        <ul class="list-group">
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    <div class="row">
          <p></p>
          </div>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });
}

function writeEndHTML() {
    fs.appendFile("team.html", `
    
    </body>
    </html>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });

}

function createEngineer() {

    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What's the ID number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What's the email ?"
        },
        {
            type: "input",
            name: "engineerOffice",
            message: "What's the office number?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What's the person's github username?"
        },
        {
            type: "input",
            name: "memberType",
            message: "What type of member would you like to add? (if done, press Enter)"
        }
    ])
        .then(function (answers) {
            const engineerObject = answers;
            //testing constructor here below..
            engineer = new Engineer(engineerObject.engineerName, engineerObject.engineerId, engineerObject.engineerEmail, engineerObject.engineerOffice, engineerObject.engineerGithub)

            writeFileEngineer();
            if (answers.memberType === "engineer") {
                createEngineer();
            }
            else if (answers.memberType === "intern") {
                createIntern();
            }
            else {
                writeEndHTML();

                console.log("thanks for using this program!")
            }

        });
}

function createIntern() {

    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What's the ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What's the email ?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What's the intern's school?"
        },
        {
            type: "input",
            name: "memberType",
            message: "What type of member would you like to add? (if done, press Enter)"
        }
    ])
        .then(function (answers) {
            const internObject = answers;
            //testing constructor here below..
            intern = new Intern(internObject.internName, internObject.internId, internObject.internEmail, internObject.internSchool)
            writeFileIntern();
            if (answers.memberType === "engineer") {
                createEngineer();
            }
            else if (answers.memberType === "intern") {
                createIntern();
            }
            else {
                writeEndHTML();

                console.log("thanks for using this program!")
            }

        });
}



