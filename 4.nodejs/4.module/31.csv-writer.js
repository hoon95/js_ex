// 모듈 내의 특정 함수만 가져오기
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'hello3.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'lang', title: 'LANGUAGE'}
    ]
});
 
const records = [
    {name: 'Bob',  lang: 'French, English'},
    {name: 'Mary', lang: 'English'}
];
 
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });