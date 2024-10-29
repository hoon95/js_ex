const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const AddressGenerator = require('../common/AddressGenerator');
const NameGenerator = require('./NameGenerator');

class StoreGenerator {
    generateStore() {
        const idGenerate = new IdGenerator();
        const nameGenerate = new NameGenerator();
        const addrGenerate = new AddressGenerator();

        const csvWriter = createCsvWriter({
            path: '../../csv/result/store.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'name', title: 'Name'},
                {id: 'type', title: 'Type'},
                {id: 'addr', title: 'Address'}
            ]
        });
            
        const records = [];
        for(let i=1; i<=100; i++) {
            const id = idGenerate.generateId();
            const nametype = nameGenerate.generateName();
            const name = nametype.fullName;
            const type = nametype.name1;
            const addr = addrGenerate.generateAddress();

            records.push({
                id: id,
                name: name,
                type: type,
                addr: addr
            })
        }
         
        csvWriter.writeRecords(records)
            .then(() => {
                console.log('...Done');
            });
    }
}

const storeGenerate = new StoreGenerator();
storeGenerate.generateStore();