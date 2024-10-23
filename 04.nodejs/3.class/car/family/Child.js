const Person = require('./Person');

class Child extends Person {
    constructor(name, age, gender, grade) {
        super(name, age, gender);
        this.grade = grade;
    }

    playInCar() {
        console.log(`playInCar : ${this.grade}인 ${this.name}`);
    }
    sing() {
        console.log(`sing: ${this.grade}`);
    }
}

module.exports = Child;