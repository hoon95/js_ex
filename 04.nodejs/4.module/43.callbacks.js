function asyncOperation1(response, callback) {
    setTimeout(() => {
        console.log('Operation1 completed');
        callback('Response1');
    }, 1000);
}

function asyncOperation2(response, callback) {
    setTimeout(() => {
        console.log('Operation2 completed', response);
    }, 1000);
}

// Callback hell
asyncOperation1(null, (response1) => {
    asyncOperation2(response1, (response2) => {
        asyncOperation1(response2, (response3) => {
            asyncOperation2(response3, (response4) => {
                console.log(response4);
            })
        })
    })
})