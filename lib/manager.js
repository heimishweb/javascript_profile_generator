module.exports = class Manager {
    constructor(managerName, managerId, managerEmail, managerOffice) {
        this.managerName = managerName;
        this.managerId = managerId;
        this.managerEmail = managerEmail;
        this.managerOffice = managerOffice;


    }
    introduce() {
        console.log(`Hello, my name is ${this.managerName}`);
    }
}