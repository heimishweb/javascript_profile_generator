const Employee = require("./employee.js")
module.exports = class Engineer extends Employee {
    constructor(name, id, email, office, github) {
        super(name, id, email, office) //f
        this.github = github;


    }
    getGithub() {
        console.log("Engineer's github is: " + this.github)
    }
    getRole() {
        console.log("Engineer")
    }

}

// const engineer01 = new Engineer('Bob');
// engineer01.introduce();




