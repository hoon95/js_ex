// map : 배열의 멤버에게 공통적으로 원하는 함수 내용을 적용할 때 쓰는 함수
const numbers = [1,2,3,4,5];
const doubled = numbers.map(n => n * 2);
// console.log(doubled);

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age:20},
    {name: "David", age: 35}
];
const names = people.map(p => p.name);
const ages = people.map(p => p.age);
// console.log(names);
// console.log(ages);

// Q1.
const fruits = ["apple", "banana", "grape"];
const htmlTags = fruits.map(f => `<li>${f}</li>`);     // 좌우를 <li> 태그로 감싸기
// console.log(htmlTags);

// Q2.
const apiData = [
    { id: 1, firstName: "John", lastName: "Doe"},
    { id: 2, firstName: "Jane", lastName: "Smith"}
];
const fullName = apiData.map(data => `${data.firstName} ${data.lastName}`);
console.log(fullName);