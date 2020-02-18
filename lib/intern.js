module.exports = class Intern {
    constructor(internName, internId, internEmail, internOffice) {
        this.internName = internName;
        this.internId = internId;
        this.internEmail = internEmail;
        this.internOffice = internOffice;


    }
    introduce() {
        console.log(`Hello, my name is ${this.engineerName}`);
    }
}