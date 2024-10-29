const fs = require('fs');
const { parse } = require('csv-parse/sync');


class LoadStoreUserId { 
    Store() {
        const data = fs.readFileSync('../../csv/result/store.csv', 'utf-8');
        const records = parse(data, {
            columns: true
        });
        const storeIds = records.map(record => record.Id);
        const storeRandomId = storeIds[Math.floor(Math.random() * storeIds.length)];
        return storeRandomId;
    }
    
    User() {
        const data = fs.readFileSync('../../csv/result/user.csv', 'utf-8');
        const records = parse(data, {
            columns: true
        });
        const userIds = records.map(record => record.Id);
        const userRandomId = userIds[Math.floor(Math.random() * userIds.length)];
        return userRandomId;
    }
}

module.exports = LoadStoreUserId;