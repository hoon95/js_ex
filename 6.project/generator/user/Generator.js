const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IdGenerator = require('../common/IdGenerator');
const NameGenerator = require('./NameGenerator');
const BirthdateGenerator = require('./BirthdateGenerator');
const AddressGenerator = require('../common/AddressGenerator');
const GenderGenerator = require('./GenderGenerator');

class UserGenerator {
    constructor(num) {
        this.num = num;
        this.idGenerate = new IdGenerator();
        this.nameGenerate = new NameGenerator();
        this.genderGenerate = new GenderGenerator();
        this.birthGenerate = new BirthdateGenerator();
        this.addrGenerate = new AddressGenerator();

        this.csvWriter = createCsvWriter({
            path: '../csv/result/user.csv',
            header: [
                {id: 'id', title: 'Id'},
                {id: 'name', title: 'Name'},
                {id: 'gender', title: 'Gender'},
                {id: 'age', title: 'Age'},
                {id: 'birth', title: 'Birthdate'},
                {id: 'addr', title: 'Address'}
            ]
        });
    }

    generateUser() {
        const records = [];
        for ( let i = 1; i <= this.num; i++ ) {
            const id = this.idGenerate.generateId();
            const names = this.nameGenerate.generateName();
            const gender = this.genderGenerate.generateGender();
            const birthAge = this.birthGenerate.generateBirthdate();
            const addr = this.addrGenerate.generateAddress();

            records.push({
                id: id,
                name: names,
                gender: gender,
                age: birthAge.age,
                birth: birthAge.fullYear,
                addr: addr
            })
        }
         
        this.csvWriter.writeRecords(records)
            .then(() => console.log('User 데이터 생성 완료'))
            .catch(err => console.error(err.message));
    }
}

module.exports = UserGenerator;