const Person = require('./Person');

class Customer extends Person {
    constructor(name, age, gender, customerId, orderHistory) {
        super(name, age, gender);
        this.customerId = customerId;
        this.orderHistory = orderHistory;
    }

    placeOrder(product) {
        console.log(`${this.name} 고객이 ${this.orderHistory}를 주문하였습니다.`);
        this.orderHistory.push(product);
    }

    printOrderHistory() {
        console.log(this.orderHistory);

        for(let i=0; i<this.orderHistory.length; i++){
            console.log('- ' + this.orderHistory[i]);
        }

        console.log(`주문내역: ${this.orderHistory.join('<br>')}`);
    }
 }

 module.exports = Customer;