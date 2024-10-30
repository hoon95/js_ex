const fs = require('fs');
const { parse } = require('csv-parse/sync');

class LoadStoreUserId {
    constructor() {
        this.userIds = [];
        this.storeIds = [];
        this.orderIds = [];
        this.itemIds = [];
        this.loadIds();
    }

    loadIds() {
        const storePath = fs.readFileSync('../csv/result/store.csv', 'utf-8');
        const storeData = parse(storePath, { columns: true });
        this.storeIds = storeData.map(record => record.Id);

        const userPath = fs.readFileSync('../csv/result/user.csv', 'utf-8');
        const userData = parse(userPath, { columns: true });
        this.userIds = userData.map(record => record.Id);

        const orderPath = fs.readFileSync('../csv/result/order.csv', 'utf-8');
        const orderData = parse(orderPath, { columns: true });
        this.orderIds = orderData.map(record => record.Id);

        const itemPath = fs.readFileSync('../csv/result/item.csv', 'utf-8');
        const itemData = parse(itemPath, { columns: true });
        this.itemIds = itemData.map(record => record.Id);
    }

    getRandomId(ids) {
        if (ids.length === 0) {
            throw new Error("ID 배열이 비어 있습니다.");
        }
        return ids[Math.floor(Math.random() * ids.length)];
    }

    Store() {
        return this.getRandomId(this.storeIds);
    }

    User() {
        return this.getRandomId(this.userIds);
    }

    Order() {
        return this.getRandomId(this.orderIds);
    }

    Item() {
        return this.getRandomId(this.itemIds);
    }
}

module.exports = LoadStoreUserId;