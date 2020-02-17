module.exports = class Engineer {
    constructor(engineerName, engineerId, engineerOffice, engineerEmail) {
        this.engineerName = engineerName;
        this.engineerId = engineerId;
        this.engineerOffice = engineerOffice;
        this.engineerEmail = engineerEmail;

    }
    introduce() {
        console.log(`Hello, my name is ${this.engineerName}`);
    }
}

// const engineer01 = new Engineer('Bob');
// engineer01.introduce();


