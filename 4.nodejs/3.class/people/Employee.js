const Person = require('./Person');

class Employee extends Person {
    constructor(name, age, gender, jobTitle, salary) {
        // this.name = name;
        // this.age = age;
        // this.gender = gender;
        super(name, age, gender);

        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    displayInfo() {
        console.log(`${this.name}의 직위는 ${this.jobTitle}이며, ${this.salary}원을 받는다`);
    }
    work() {
        console.log(`${this.name}이(가) 업무 중입니다.`);
    }
}

module.exports = Employee;