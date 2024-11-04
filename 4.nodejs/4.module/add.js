// add.js : 더하는 함수가 있는 모듈
function addNumbers(a, b) {
    return a + b;
}

function subNumbers(a, b){
    return a - b;
}

module.exports = { addNumbers, subNumbers };    // index.js - require