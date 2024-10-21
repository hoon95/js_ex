// 고차함수 : 함수를 인자로 받음
function doSomething(func){
    console.log('내가 하고 싶은 일을 먼저');
    func();
}

function sayHello(){
    console.log('안녕하세요?');
}

// doSomething(sayHello);

// 함수를 반환하는 고차함수
function createMultiplier(multiplier){
    return function(x){
        return x * multiplier;
    }
}

const double = createMultiplier(2);
// console.log(double(5));     // 2 * 5 = 10

const numbers = [10, 15, 20, 25, 30];
// let number3 = numbers.filter((n) => {return n < 20 ? true : false});
// let number3 = numbers.filter((n) => {return n < 20});
// let number3 = numbers.filter((n) => (n < 20 ? true : false));
// let number3 = numbers.filter((n) => (n < 20));
let number3 = numbers.filter(n => n < 20);
// console.log(number3);

// console.log('-------');

const number2 = [1,2,3,4,5,6,7,8,9];

const evenNumbers = number2.filter(n => n % 2 == 0);   // 짝수
const oddNumbers = number2.filter(n => n % 2 == 1);    // 홀수

// console.log("짝수 : ", evenNumbers);
// console.log("홀수 : ", oddNumbers);

// 특정 문자열 필터링
const words = ["apple", "banana", "blueberry", "avocado"];

function containALetter(word){
    // 이 단어를 for문으로 길이만큼 반복하면서 ...
    // 만약 그 char 위치에 해당 글자 'a'를 포함하면? return true인 함수를 작성

    for(let i=0; i<word.length; i++) {
        if(word[i] === 'a') {
            return true;
        }
    }
}
const containsA = words.filter(containALetter);
// console.log(containsA);

// const containsA = words.filter(word => word.includes('a'));
// console.log(containsA);

// 객체 배열(Object를 담고 있는 Array)에서 무언가 골라내기
const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 20},
    {name: "David", age: 35}
];
const adults = people.filter(p => p.age >= 30);     // 30세 이상
// console.log(adults);

const people2 = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie"},
    {name: "David", age: 35}
];
// const unknownAge = people2.filter(p => !p.age);     // 나이가 없는 사람
const unknownAge = people2.filter(p => !p.hasOwnProperty('age'));     // 나이가 없는 사람
console.log(unknownAge[0].name);