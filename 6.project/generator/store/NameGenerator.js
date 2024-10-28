const fs = require('fs');

class NameGenerator { 
    generateName() {
        const brandName = fs.readFileSync('../../csv/store/brand.csv', 'utf-8');
        const storeName = fs.readFileSync('../../csv/store/store.csv', 'utf-8');
        const brandNameSplit = brandName.split(',');
        const storeNameSplit = storeName.split(',');

        const name1 = brandNameSplit[Math.floor(Math.random() * brandNameSplit.length)];
        const name2 = storeNameSplit[Math.floor(Math.random() * storeNameSplit.length)];

        const storeNumber = Math.floor(Math.random() * 10);
        return {
            name1: name1,
            fullName: `${name1} ${name2}${storeNumber}호점`
        };
    }
}

module.exports = NameGenerator;