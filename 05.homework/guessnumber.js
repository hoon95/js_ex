/*
    1부터 100 사이의 숫자를 맞춰보세요: 50
    OUTPUT
    더 작은 숫자입니다 or 더 큰 숫자입니다.
    correct : 정답입니다!
*/

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
const number = Math.floor(Math.random() * 100) + 1;
let count = 1;
console.log(`정답은 ${number} 입니다.`);

const guessNumber = () => {
    rl.question('1부터 100 사이의 숫자를 맞춰보세요: ', (answer) => {
        if(answer == number) {
            console.log(`correct : 정답입니다! ${count}번 만에 맞췄습니다.`);
            rl.close();
        } else if(answer > number) {
            count++;
            console.log('더 작은 숫자입니다.');
            guessNumber();
        } else if(answer < number) {
            count++;
            console.log('더 큰 숫자입니다.');
            guessNumber();
        }
    });
}

guessNumber();