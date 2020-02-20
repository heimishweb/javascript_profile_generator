const Employee = require("./employee.js")
module.exports = class Intern extends Employee {
    constructor(name, id, email, office, school) {
        super(name, id, email, office, school)


    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

