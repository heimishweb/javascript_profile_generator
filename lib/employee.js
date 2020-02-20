module.exports = class Employee {
    constructor(name, id, email, office, school, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.school = school;
        this.github = github;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return "Employee"
    }

}


