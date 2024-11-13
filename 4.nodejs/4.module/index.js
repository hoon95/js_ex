// 메인 파일 : index.js / App.js (통상적으로 사용하는 명칭)
const { addNumbers, subNumbers } = require('./add');

const result = addNumbers(2, 3);
console.log(`결과 : ${result}`);

const diff = subNumbers(7, 4);
console.log(`결과 : ${diff}`);