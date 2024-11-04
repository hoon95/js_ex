const { readCSV, writeCSV } = require('./21.csvlibrary');
const filePath = 'hello2.csv';
// const content = [
//     ['이름', '나이', '직업'],
//     ['이수민', 32, '디자이너'],
//     ['박영수', 45, '프로젝트 매니저'],
//     ['최민지', 29, '데이터 분석가']
// ];

readCSV(filePath, (err, data) => {
    if(err){
        console.log(err.message);
    }
    console.log(data);
})
// writeCSV(filePath, content, (err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     console.log('쓰기 완료');
// });