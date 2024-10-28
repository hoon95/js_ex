const fs = require('fs');

class NameGenerator { 
    generateName() {
        const firstName = fs.readFileSync('./csv/name/firstName.csv', 'utf-8');
        const lastName = fs.readFileSync('./csv/name/lastName.csv', 'utf-8');
        const firstNameSplit = firstName.split(',');
        const lastNameSplit = lastName.split(',');

        const name1 = firstNameSplit[Math.floor(Math.random() * firstNameSplit.length)];
        const name2 = lastNameSplit[Math.floor(Math.random() * lastNameSplit.length)];
        return `${name1}${name2}`;
    }
}

module.exports = NameGenerator;