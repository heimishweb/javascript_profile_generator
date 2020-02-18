
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
                message: "What type of member would you like to add?"
            }
        ])
            .then(function (answers) {
                const managerObject = answers;
                console.log(managerObject);
                //testing constructor here below..
                manager01 = new Manager(managerObject.managerName, managerObject.managerId, managerObject.managerEmail, managerObject.managerOffice)
                console.log("manager01 :" + `email: ${manager01.managerEmail}, office number: ${manager01.managerOffice}`) //to see an example
                writeFileManager();
                if (answers.nextMemberType === "engineer") {
                    console.log("chose engineer")
                    createEngineer();

                }
                else if (answers.nextMemberType === "intern") {
                    console.log("chose intern")
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
    fs.writeFile("main.html", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
          <div class="container">
              <h1 class="display-4">Hi! My name is ${manager01.managerName}</h1>
              <p class="lead">Id:${manager01.managerId}.</p>
              <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
              <ul class="list-group">
                  <li class="list-group-item">My email is ${manager01.managerEmail}</li>
                  <li class="list-group-item">Office: ${manager01.managerOffice}</li>
              </ul>
          </div>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });
}

//Writes Engineer profile html code  
function writeFileEngineer() {
    fs.appendFile("main.html", `
    
          <div class="container">
              <h1 class="display-4">Hi! My name is ${engineer.engineerName}</h1>
              <p class="lead">Id:${engineer.engineerId}.</p>
              <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
              <ul class="list-group">
                  <li class="list-group-item">My email is ${engineer.engineerEmail}</li>
                  <li class="list-group-item">Office: ${engineer.engineerOffice}</li>
              </ul>
          </div>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });
}

function writeFileIntern() {
    fs.appendFile("main.html", `
    
    <div class="container">
        <h1 class="display-4">Hi! My name is ${intern.internName}</h1>
        <p class="lead">Id:${intern.internId}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
            <li class="list-group-item">My email is ${intern.internEmail}</li>
            <li class="list-group-item">Office: ${intern.internOffice}</li>
        </ul>
    </div>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });
}

function writeEndHTML() {
    fs.appendFile("main.html", `
    
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
            name: "memberType",
            message: "What type of member would you like to add?"
        }
    ])
        .then(function (answers) {
            const engineerObject = answers;
            console.log(engineerObject);
            //testing constructor here below..
            engineer = new Engineer(engineerObject.engineerName, engineerObject.engineerId, engineerObject.engineerEmail, engineerObject.engineerOffice)
            writeFileEngineer();
            if (answers.memberType === "engineer") {
                console.log("chose engineer")
                createEngineer();
            }
            else if (answers.memberType === "intern") {
                console.log("chose intern")
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
            name: "internOffice",
            message: "What's the office number?"
        },
        {
            type: "input",
            name: "memberType",
            message: "What type of member would you like to add?"
        }
    ])
        .then(function (answers) {
            const internObject = answers;
            console.log(internObject);
            //testing constructor here below..
            intern = new Intern(internObject.internName, internObject.internId, internObject.internEmail, internObject.internOffice)
            writeFileIntern();
            if (answers.memberType === "engineer") {
                console.log("chose engineer")
                createEngineer();
            }
            else if (answers.memberType === "intern") {
                console.log("chose intern")
                createIntern();
            }
            else {
                writeEndHTML();

                console.log("thanks for using this program!")
            }

        });
}

// collect data from user with inq

// use fs to write a html document

