const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const GetItemInfo = require('./GetItemIfo');

class ItemGenerator {
    generateItem() {
        const idGenerate = new IdGenerator();
        const itemInfo = new GetItemInfo();
        
        // CSV 변환
        const csvWriter = createCsvWriter({
            path: '../../csv/result/item.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'name', title: 'Name'},
                {id: 'type', title: 'Type'},
                {id: 'price', title: 'UnitPrice'},
            ]
        });
            
        const records = [];
        for(let i=1; i<=20; i++) {
            const id = idGenerate.generateId();
            const unit = itemInfo.Item();
            const unitRandom = unit[Math.floor(Math.random() * unit.length)];

            records.push({
                id: id,
                name: `${unitRandom.Name} ${unitRandom.Type}`,
                type: unitRandom.Type,
                price: unitRandom.UnitPrice
            })
        }
         
        csvWriter.writeRecords(records)
            .then(() => {
                console.log('...Done');
            });
    }
}

const itemGenerator = new ItemGenerator();
itemGenerator.generateItem();