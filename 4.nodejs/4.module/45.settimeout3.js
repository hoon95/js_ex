// 타이머를 통한 비동기처리
// 모든 비동기 함수를.. 내가 기다리게 만들어주려면? Promise로 감싸야 한다

// setTimeout(() => {
//     console.log('1. 첫 번째 작업 : 1초 후 실행');
// }, 1000);

// setTimeout(() => {
//     console.log('2. 두 번째 작업 : 2초 후 실행');
// }, 2000);

// setTimeout(() => {
//     console.log('3. 세 번째 작업 : 3초 후 실행');
// }, 3000);

// console.log('4. 모든 작업이 완료되었습니다.');

function setTimeoutSync(msg, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, delay);
    });
}

// setTimeoutSync('1. 첫 번째 작업 : 1초 후 실행', 1000)
//     .then(() => {
//         return setTimeoutSync('2. 두 번째 작업 : 2초 후 실행', 1000);
//     })
//     .then(() => setTimeoutSync('3. 세 번째 작업 : 3초 후 실행', 1000);)
//     .then(() => {
//         return console.log('4. 모든 작업이 완료되었습니다.');
//     });

async function executeTask() {
    await setTimeoutSync('1. 첫 번째 작업 : 1초 후 실행', 1000);
    await setTimeoutSync('2. 두 번째 작업 : 2초 후 실행', 1000);
    await setTimeoutSync('3. 세 번째 작업 : 3초 후 실행', 1000);
    await console.log('4. 모든 작업이 완료되었습니다.');
}

executeTask();