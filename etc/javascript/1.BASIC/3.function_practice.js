/*
    add(+), substract(-), multiply(*), division(/)
    4개의 함수를 만들어보자
*/

// 01. function
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function division(a, b) {
    return (a / b).toFixed(2);
}

console.log('일반 함수로 구현');
console.log('add : ' + add(2, 3));
console.log('substract : ' + substract(2, 3));
console.log('multiply : ' + multiply(2, 3));
console.log('division : ' + division(2, 3));

console.log('----------');

// 02. arrow function
const addArrow = (a, b) => (a + b);
const substrArrow = (a, b) => (a - b);
const multiArrow = (a, b) => (a * b);
const dvsArrow = (a, b) => ((a / b).toFixed(2));

console.log('화살표 함수로 구현');
console.log('addArrow : ' + addArrow(2, 3));
console.log('substrArrow : ' + substrArrow(2, 3));
console.log('multiArrow : ' + multiArrow(2, 3));
console.log('dvsArrow : ' + dvsArrow(2, 3));