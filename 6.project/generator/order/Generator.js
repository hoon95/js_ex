const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const OrderAtGenerator = require('./OrderAtGenerator');
const LoadStoreUserId = require('../common/LoadId');

class OrderGenerator {
    constructor(num) {
        this.num = num;
        this.idGenerate = new IdGenerator();
        this.loadId = new LoadStoreUserId();
        this.orderAt = new OrderAtGenerator();
        
        // CSV 변환
        this.csvWriter = createCsvWriter({
            path: '../csv/result/order.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'orderat', title: 'OrderAt'},
                {id: 'storeid', title: 'StoreId'},
                {id: 'userid', title: 'UserId'},
            ]
        });
    }

    generateOrder() {
        const records = [];
        for(let i=1; i<=this.num; i++) {
            const id = this.idGenerate.generateId();
            const orderat = this.orderAt.generateOrderAt();
            const storeid = this.loadId.Store();
            const userid = this.loadId.User();

            records.push({
                id: id,
                orderat: orderat,
                storeid: storeid,
                userid: userid
            })
        }
         
        this.csvWriter.writeRecords(records)
            .then(() => {
                console.log('Order 데이터 생성 완료');
            });
    }
}

module.exports = OrderGenerator;