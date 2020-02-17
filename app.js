const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

//************************************************************************* */
// import Engineer from './lib/engineer.js'; // i don't think it's needed

const engineer01 = new Engineer("john");
console.log("module worked if name shows up: " + engineer01.engineerName)
//************************************************************************* */




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
                name: "memberType",
                message: "What type of member would you like to add?"
            }
        ])
            .then(function (answers) {
                const managerObject = answers;
                console.log(managerObject);
                //testing constructor here below..
                manager01 = new Manager(managerObject.managerName, managerObject.managerId, managerObject.managerEmail, managerObject.managerOffice)
                console.log("manager01 :" + manager01.managerEmail) //to see an example

                if (answers.memberType === "engineer") {
                    console.log("chose engineer")
                    createEngineer();
                }
                else if (answers.memberType === "intern") {
                    console.log("chose intern")
                    createIntern();
                }

                else {
                    console.log("thanks for using this program!")
                }

            });
    }
}

appMenu();


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
            if (answers.memberType === "engineer") {
                console.log("chose engineer")
                createEngineer();
            }
            else if (answers.memberType === "intern") {
                console.log("chose intern")
                createIntern();
            }
            else {
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
            if (answers.memberType === "engineer") {
                console.log("chose engineer")
                createEngineer();
            }
            else if (answers.memberType === "intern") {
                console.log("chose intern")
                createIntern();
            }
            else {
                console.log("thanks for using this program!")
            }

        });
}
