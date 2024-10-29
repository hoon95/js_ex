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

    Order() {
        const data = fs.readFileSync('../../csv/result/order.csv', 'utf-8');
        const records = parse(data, {
            columns: true
        });
        const orderIds = records.map(record => record.Id);
        const orderRandomId = orderIds[Math.floor(Math.random() * orderIds.length)];
        return orderRandomId;
    }

    Item() {
        const data = fs.readFileSync('../../csv/result/item.csv', 'utf-8');
        const records = parse(data, {
            columns: true
        });
        const itemIds = records.map(record => record.Id);
        const itemRandomId = itemIds[Math.floor(Math.random() * itemIds.length)];
        return itemRandomId;
    }

}

module.exports = LoadStoreUserId;