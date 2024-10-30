const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const OrderAtGenerator = require('./OrderAtGenerator');
const LoadStoreUserId = require('../common/LoadId');

class OrderGenerator {
    generateOrder() {
        const idGenerate = new IdGenerator();
        const loadId = new LoadStoreUserId();
        const orderAt = new OrderAtGenerator();
        
        // CSV 변환
        const csvWriter = createCsvWriter({
            path: '../csv/result/order.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'orderat', title: 'OrderAt'},
                {id: 'storeid', title: 'StoreId'},
                {id: 'userid', title: 'UserId'},
            ]
        });
            
        const records = [];
        for(let i=1; i<=1000; i++) {
            const id = idGenerate.generateId();
            const orderat = orderAt.generateOrderAt();
            const storeid = loadId.Store();
            const userid = loadId.User();

            records.push({
                id: id,
                orderat: orderat,
                storeid: storeid,
                userid: userid
            })
        }
         
        csvWriter.writeRecords(records)
            .then(() => {
                console.log('Order 데이터 생성 완료');
            });
    }
}

module.exports = OrderGenerator;