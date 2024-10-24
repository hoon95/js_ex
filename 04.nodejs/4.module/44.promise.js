// const myPromise = new Promise((resolve, reject) => {
    // 비동기 작업 수행
    // 성공하면 resolve() 호출
    // 실패하면 reject() 호출
// })

// myPromise
//     .then((result) => {

//     })
//     .catch((err) => {
        
//     });

// 43.callbacks.js와 비교
function asyncOperation1(response, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation1 completed');
            callback('Response1');
        }, 1000);
    })
}

function asyncOperation2(response, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation2 completed', response);
        }, 1000);
    })
}


asyncOperation1()
    .then(response1 => asyncOperation2(response1))
    .then(response2 => asyncOperation1(response2))
    .then(response3 => asyncOperation2(response3))
    .then(response4 => {
        console.log(response4);
    })
    .catch(err => {
        console.error(err);
    });

async function executeOperations() {
    try {
        const response1 = await asyncOperation1(null);
        const response2 = await asyncOperation1(response1);
        const response3 = await asyncOperation1(response2);
        const response4 = await asyncOperation1(response3);
        console.log(response4);
    } catch(err) {
        console.log(err);
    }
}

executeOperations();