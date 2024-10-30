const UserGenerator = require('./user/Generator');
const StoreGenerator = require('./store/Generator');
const OrderGenerator = require('./order/Generator');
const ItemGenerator = require('./item/Generator');
const OrderItemGenerator = require('./orderitem/Generator');

class Generate {
    constructor() {
        this.user = new UserGenerator();
        this.store = new StoreGenerator();
        this.item = new ItemGenerator();
        this.order = new OrderGenerator();
        this.orderItem = new OrderItemGenerator();
    }

    User() {
        return this.user.generateUser();
    }

    Store() {
        return this.store.generateStore();
    }

    Item() {
        return this.item.generateItem();
    }

    Order() {
        return this.order.generateOrder();
    }

    OrderItem() {
        return this.orderItem.generateOrderItem();
    }
}

const generate = new Generate();
// generate.User();
generate.Store();
// generate.Item();
// generate.Order();
// generate.OrderItem();




