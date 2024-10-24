function asyncLongtask(callback) {
    setTimeout(() => {
        const randomNumber = Math.random();
        if(randomNumber >= 0.5) {
            callback(null, '작업이 완료되었습니다.');
        }else {
            callback('작업이 실패하였습니다.', null);
        }
    }, 2000);
}

function displayResult() {
    console.log('실행 완료');
}

asyncLongtask((err, result) => {
    if(err) {
        console.error(err.message);
        return;
    }
    console.log(result);
});