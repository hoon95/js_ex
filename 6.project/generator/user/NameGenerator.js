const fs = require('fs');

class NameGenerator {
    constructor() {
        this.firstName = fs.readFileSync('../csv/name/firstName.csv', 'utf-8').split(',');
        this.lastName = fs.readFileSync('../csv/name/lastName.csv', 'utf-8').split(',');
    }

    generateName() {
        const name1 = this.firstName[Math.floor(Math.random() * this.firstName.length)];
        const name2 = this.lastName[Math.floor(Math.random() * this.lastName.length)];
        return `${name1}${name2}`;
    }
}

module.exports = NameGenerator;