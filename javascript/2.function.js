// 1. 함수의 기본 형태
function greet(name) {
    console.log('Hello ' + name);
}

function add(a, b) {
    return a + b;
}

greet('world');
greet('Tom');
greet('shpark');
greet('KIM');

console.log(add(2, 3));
console.log(add(3, 5));

// 2. 익명함수 : 이름이 없는 함수
let sum2 = function (a, b) {
    return a + b;
}
console.log(sum2(5, 7));

// 3. arrow function : 불필요한 function 축약
let sum3 = ((a, b) => {
    return a + b;
});
let sum4 = (a, b) => a + b;
console.log(sum3(4, 5));
console.log(sum4(3, 4));