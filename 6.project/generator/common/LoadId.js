const fs = require('fs');
const { parse } = require('csv-parse/sync');


class LoadStoreUserId { 
    Store() {
        const storePath = fs.readFileSync('../csv/result/store.csv', 'utf-8');
        const storeData = parse(storePath, {
            columns: true
        });
        const storeIds = storeData.map(record => record.Id);
        const storeRandomId = storeIds[Math.floor(Math.random() * storeIds.length)];
        return storeRandomId;
    }
    
    User() {
        const userPath = fs.readFileSync('../csv/result/user.csv', 'utf-8');
        const userData = parse(userPath, {
            columns: true
        });
        const userIds = userData.map(record => record.Id);
        const userRandomId = userIds[Math.floor(Math.random() * userIds.length)];
        return userRandomId;
    }

    Order() {
        const orderPath = fs.readFileSync('../csv/result/order.csv', 'utf-8');
        const orderData = parse(orderPath, {
            columns: true
        });
        const orderIds = orderData.map(record => record.Id);
        const orderRandomId = orderIds[Math.floor(Math.random() * orderIds.length)];
        return orderRandomId;
    }

    Item() {
        const itemPath = fs.readFileSync('../csv/result/item.csv', 'utf-8');
        const itemData = parse(itemPath, {
            columns: true
        });
        const itemIds = itemData.map(record => record.Id);
        const itemRandomId = itemIds[Math.floor(Math.random() * itemIds.length)];
        return itemRandomId;
    }

}

module.exports = LoadStoreUserId;