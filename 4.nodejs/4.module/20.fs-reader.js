const fs = require('fs');
const filePath = 'hello.csv';

// Read CSV File
function csv_readfile(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            console.error(err.message);
            return;
        }
        // console.log(data);
        // console.log(typeof data);       // 우리가 볼땐 csv지만 string임

        // 이 문자열을 다시 우리가 원하는 자료구조(데이터 형)으로 변환
        // 1. 데이터를 한줄씩 구분한다
        const rows = data.split('\n');
        // console.log(rows);       // [ '이름,나이,직업', '이수민,32,디자이너', '박영수,45,프로젝트 매니저', '최민지,29,데이터 분석가' ]

        // 2. 한줄씩 콤마로 구분한다
        // for(let i=0; i<rows.length; i++){
        //     const row = rows[i];
        //     const columns = row.split(',');
        //     console.log(columns);   // [ '이름', '나이', '직업' ]
        //                             // [ '이수민', '32', '디자이너' ]
        //                             // [ '박영수', '45', '프로젝트 매니저' ]
        //                             // [ '최민지', '29', '데이터 분석가' ]
        // }

        const result = rows.map((row)=>row.split(','));
        callback(result);
    });
}

csv_readfile(filePath, (data)=>{
    console.log(data);
});

// Write CSV File
const content = [
    ['이름', '나이', '직업'],
    ['이수민', 32, '디자이너'],
    ['박영수', 45, '프로젝트 매니저'],
    ['최민지', 29, '데이터 분석가']
];

function csv_writefile() {
    fs.writeFile(filePath, csvContent, (err) => {
        if(err) {
            console.error(err.message);
            return;
        }
        console.log('쓰기 완료');
    })
}
const csvContent = content.map((row)=>row.join(',')).join('\n');
// csv_writefile();