const fs = require('fs').promises;
const UserGenerator = require('./user/Generator');
const StoreGenerator = require('./store/Generator');
const OrderGenerator = require('./order/Generator');
const ItemGenerator = require('./item/Generator');
const OrderItemGenerator = require('./orderitem/Generator');
const LoadStoreUserId = require('./common/LoadId');

class Generate {
    constructor() {
        this.user = new UserGenerator(1000);
        this.store = new StoreGenerator(100);
        this.item = new ItemGenerator(10000);
        this.order = new OrderGenerator(20);
        this.orderItem = new OrderItemGenerator(50000);
        this.idLoader = new LoadStoreUserId();
    }

    async User() {
        await this.user.generateUser();
    }

    async Store() {
        await this.store.generateStore();
    }

    async Item() {
        await this.item.generateItem();
    }

    async Order() {
        const files = await fs.readdir(`${__dirname}/../csv/result`);
        if (files.includes('store.csv')) {
            await this.order.generateOrder(this.idLoader);
        } else {
            throw new Error('store.csv가 생성되지 않았습니다.');
        }
    }

    async OrderItem() {
        const files = await fs.readdir(`${__dirname}/../csv/result`);
        if (files.includes('store.csv') && files.includes('item.csv') && files.includes('order.csv')) {
            await this.orderItem.generateOrderItem(this.idLoader);
        } else {
            throw new Error('store.csv, item.csv 또는 order.csv가 생성되지 않았습니다.');
        }
    }
}

async function runGenerators() {
    const generate = new Generate();
    try {
        console.time('소요 시간');

        await generate.User();
        await generate.Store();
        await generate.Item();
        await generate.Order();
        await generate.OrderItem();
        
        console.timeEnd('소요 시간');
    } catch (err) {
        console.error(err.message);
    }
}

runGenerators();