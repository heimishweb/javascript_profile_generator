const Employee = require("./employee.js")
module.exports = class Intern extends Employee {
    constructor(name, id, email, office, school) {
        super(name, id, email, office, school)


    }
    getSchool() {
        console.log("Student goes to: " + this.school)
    }
    getRole() {
        console.log("Intern")
    }
}

