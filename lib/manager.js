const Employee = require("./employee.js")
module.exports = class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, office)
    }
    officeNumber() {
        console.log("Office number: " + this.office)
    }
    getRole() {
        console.log("Manager")
    }
}

