const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const NameGenerator = require('./NameGenerator');
const BirthdateGenerator = require('./BirthdateGenerator');
const AddressGenerator = require('../common/AddressGenerator');
const GenderGenerator = require('./GenderGenerator');

class UserGenerator {
    generateUser() {
        const idGenerate = new IdGenerator();
        const nameGenerate = new NameGenerator();
        const genderGenerate = new GenderGenerator();
        const birthGenerate = new BirthdateGenerator();
        const addrGenerate = new AddressGenerator();
        
        // CSV 변환
        const csvWriter = createCsvWriter({
            path: '../../csv/result/user.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'name', title: 'Name'},
                {id: 'gender', title: 'Gender'},
                {id: 'age', title: 'Age'},
                {id: 'birth', title: 'Birthdate'},
                {id: 'addr', title: 'Address'}
            ]
        });
            
        const records = [];
        for(let i=1; i<=1000; i++) {
            const id = idGenerate.generateId();
            const names = nameGenerate.generateName();
            const gender = genderGenerate.generateGender();
            const birthAge = birthGenerate.generateBirthdate();
            const age = birthAge.age;
            const birth = birthAge.fullYear;
            const addr = addrGenerate.generateAddress();

            records.push({
                id: id,
                name: names,
                gender: gender,
                age: age,
                birth: birth,
                addr: addr
            })
        }
         
        csvWriter.writeRecords(records)
            .then(() => {
                console.log('...Done');
            });
    }
}

const userGenerate = new UserGenerator();
userGenerate.generateUser();