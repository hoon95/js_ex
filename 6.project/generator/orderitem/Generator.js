const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const LoadStoreUserId = require('../common/LoadId');

class OrderItemGenerator {
    constructor(num) {
        this.num = num;
        this.idGenerate = new IdGenerator();
        this.loadId = new LoadStoreUserId();
        
        // CSV 변환
        this.csvWriter = createCsvWriter({
            path: '../csv/result/orderitem.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'orderid', title: 'OrderId'},
                {id: 'itemid', title: 'ItemId'},
            ]
        });
    }

    generateOrderItem() {
        const records = [];
        for(let i=1; i<=this.num; i++) {
            const id = this.idGenerate.generateId();
            const orderid = this.loadId.Order();
            const itemid = this.loadId.Item();

            records.push({
                id: id,
                orderid: orderid,
                itemid: itemid
            })
        }
         
        this.csvWriter.writeRecords(records)
            .then(() => {
                console.log('OrderItem 데이터 생성 완료');
            });
    }
}

module.exports = OrderItemGenerator;