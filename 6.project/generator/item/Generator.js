const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const GetItemInfo = require('./GetItemIfo');

class ItemGenerator {
    constructor(num) {
        this.num = num;
        this.idGenerate = new IdGenerator();
        this.itemInfo = new GetItemInfo();
        
        // CSV 변환
        this.csvWriter = createCsvWriter({
            path: '../csv/result/item.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'name', title: 'Name'},
                {id: 'type', title: 'Type'},
                {id: 'price', title: 'UnitPrice'},
            ]
        });

    }

    generateItem() {        
        const records = [];
        for (let i=1; i<=this.num; i++) {
            const id = this.idGenerate.generateId();
            const unit = this.itemInfo.Item();
            const unitRandom = unit[Math.floor(Math.random() * unit.length)];

            records.push({
                id: id,
                name: `${unitRandom.Name} ${unitRandom.Type}`,
                type: unitRandom.Type,
                price: unitRandom.UnitPrice
            })
        }
         
        this.csvWriter.writeRecords(records)
            .then(() => {
                console.log('Item 데이터 생성 완료');
            });
    }
}

module.exports = ItemGenerator;