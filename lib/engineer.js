module.exports = class Engineer {
    constructor(engineerName, engineerId, engineerEmail, engineerOffice) {
        this.engineerName = engineerName;
        this.engineerId = engineerId;
        this.engineerEmail = engineerEmail;
        this.engineerOffice = engineerOffice;


    }
    introduce() {
        console.log(`Hello, my name is ${this.engineerName}`);
    }
}

// const engineer01 = new Engineer('Bob');
// engineer01.introduce();




