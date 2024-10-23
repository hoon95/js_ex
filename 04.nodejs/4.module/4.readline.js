import { v4 as uuidv4 } from 'uuid';

// const readline = require('linebyline'),
//     rl = readline('./example.txt');
// rl.on('line', function(line, lineCount, byteCount) {
//     // console.log(line, lineCount, byteCount);
// })
// .on('error', function(e) {
//     console.log(e.message);
// });


// const readline2 = require('readline');
// const rl2 = readline2.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl2.question('몇 단? : ', (input) => {
//     const num = parseInt(input);
//     if(isNaN(num) || num <= 0 || num > 9){
//         console.log('올바른 숫자를 입력하세요.');
//         rl2.close();
//         return;
//     }

//     console.log(`${input}단을 입력하였습니다.`)

//     for(let i=1; i<=9; i++){
//             console.log(`${num} * ${i} = ${num * i}`);
//     }

//     rl2.close();
// });

console.log(uuidv4());