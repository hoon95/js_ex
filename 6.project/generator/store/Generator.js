const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const AddressGenerator = require('../common/AddressGenerator');
const NameGenerator = require('./NameGenerator');

class StoreGenerator {
    constructor(num) {
        this.num = num;
        this.idGenerate = new IdGenerator();
        this.nameGenerate = new NameGenerator();
        this.addrGenerate = new AddressGenerator();
        
        this.csvWriter = createCsvWriter({
            path: '../csv/result/store.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'name', title: 'Name'},
                {id: 'type', title: 'Type'},
                {id: 'addr', title: 'Address'}
            ]
        });
    }

    generateStore() {
        const records = [];
        for(let i=1; i<=this.num; i++) {
            const id = this.idGenerate.generateId();
            const nametype = this.nameGenerate.generateName();
            const addr = this.addrGenerate.generateAddress();

            records.push({
                id: id,
                name: nametype.fullName,
                type: nametype.name1,
                addr: addr
            })
        }
         
        this.csvWriter.writeRecords(records)
            .then(() => console.log('Store 데이터 생성 완료'))
            .catch(err => console.error(err.message));
    }
}

module.exports = StoreGenerator;