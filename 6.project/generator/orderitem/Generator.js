const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const LoadStoreUserId = require('../common/LoadId');

class OrderItemGenerator {
    generateOrderItem() {
        const idGenerate = new IdGenerator();
        const loadId = new LoadStoreUserId();
        
        // CSV 변환
        const csvWriter = createCsvWriter({
            path: '../../csv/result/orderitem.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'orderid', title: 'OrderId'},
                {id: 'itemid', title: 'ItemId'},
            ]
        });
            
        const records = [];
        for(let i=1; i<=50000; i++) {
            const id = idGenerate.generateId();
            const orderid = loadId.Order();
            const itemid = loadId.Item();

            records.push({
                id: id,
                orderid: orderid,
                itemid: itemid
            })
        }
         
        csvWriter.writeRecords(records)
            .then(() => {
                console.log('...Done');
            });
    }
}

const orderItemGenerator = new OrderItemGenerator();
orderItemGenerator.generateOrderItem();