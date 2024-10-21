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