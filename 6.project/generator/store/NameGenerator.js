const fs = require('fs');

class NameGenerator { 
    constructor() {
        this.brandName = fs.readFileSync('../csv/store/brand.csv', 'utf-8').split(',');
        this.storeName = fs.readFileSync('../csv/store/store.csv', 'utf-8').split(',');
        this.storeNumber = Math.floor(Math.random() * 10);
    }

    generateName() {
        const name1 = this.brandName[Math.floor(Math.random() * this.brandName.length)];
        const name2 = this.storeName[Math.floor(Math.random() * this.storeName.length)];

        return {
            name1: name1,
            fullName: `${name1} ${name2}${this.storeNumber}호점`
        };
    }
}

module.exports = NameGenerator;