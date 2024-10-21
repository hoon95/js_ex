const number = [1,2,3,4,5];
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'hello', true, null, {key: 'value'}];

console.log(number[0]);         // 첫번째 인덱스는 0번이다.
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

fruits[1] = fruits[1].toUpperCase();
console.log(fruits);

var figlet = require('figlet');

figlet('HOON', (err, data) => {
    if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return
    }
    console.log(data);
});

const array1 = [1,2,3];
const array2 = [4,5,6];

// spread 연산자
const mergedArrayWithSpread = [... array1, ...array2];
console.log(mergedArrayWithSpread);

const elementsToInsert = [4,5,6];
mergedArrayWithSpread.splice(1, 0, ...elementsToInsert);
console.log(mergedArrayWithSpread);
// [1, 4,5,6, 2,3,4,5,6]

// 논리 연산자
// AND : true/false인지 끝까지 봐야한다(마지막 요소 반환)
console.log(2 && 3);    // 3
console.log(3 && 2);    // 2

// OR : 처음 충족하는 요소 반환
console.log(2 || 3);    // 2
console.log(3 || 2);    // 3

// 연산자 우선순위
console.log(2 + 3 * 2 && 3 % 7 || 2 * 3 && 1 * 8);
console.log(2 + (3 * 2) && (3 % 7) || (2 * 3) && (1 * 8));