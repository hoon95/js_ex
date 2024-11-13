const readlineSync = require('readline-sync');

// chcp 65001

const answer1 = readlineSync.question('첫 번째 숫자를 입력하세요 : ');
console.log(`첫 번째 숫자는 ${answer1} 입니다`);
const answer2 = readlineSync.question('두 번째 숫자를 입력하세요 : ');
console.log(`두 번째 숫자는 ${answer2} 입니다`);