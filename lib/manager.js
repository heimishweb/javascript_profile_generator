const Employee = require("./employee.js")
module.exports = class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, office)
    }
    officeNumber() {
        return this.office;
    }
    getRole() {
        return "Manager";
    }

    getOffice() {
        return this.office;
    }
}

