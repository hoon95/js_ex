const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('입력값 받기 전');


function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        });
    })
}

// askQuestion('원하는 값을 입력하세요 : ')
//     .then((answer) => {
//         console.log(`입력 값 : ${answer}`);
//         return askQuestion('원하는 값 2를 입력하세요 : ')
//     })
//     .then((answer) => {
//         console.log(`입력 값 2 : ${answer}`);
//         rl.close();
//     })

async function askQuestions() {
    const answer1 = await askQuestion('원하는 값을 입력하세요 1 : ');
    console.log(`answer1 : ${answer1}`);
    const answer2 = await askQuestion('원하는 값을 입력하세요 2 : ');
    console.log(`answer2 : ${answer2}`);
}

askQuestions();
