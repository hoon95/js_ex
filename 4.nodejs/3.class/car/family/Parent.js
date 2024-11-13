const Person = require('./Person');

class Parent extends Person {
    constructor(name, age, gender) {
        super(name, age, gender);
    }

    driveCar() {
        console.log(`driveCar : ${this.name}은(는)`);
    }
}

module.exports = Parent;