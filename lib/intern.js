module.exports = class Intern {
    constructor(internName, internId, internOffice, internEmail) {
        this.internName = internName;
        this.internId = internId;
        this.internOffice = internOffice;
        this.internEmail = internEmail;

    }
    introduce() {
        console.log(`Hello, my name is ${this.engineerName}`);
    }
}