const Employee = require("./employee.js")
module.exports = class Engineer extends Employee {
    constructor(name, id, email, office, github) {
        super(name, id, email, office) //f
        this.github = github;


    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }

}

// const engineer01 = new Engineer('Bob');
// engineer01.introduce();




