const { add, sub, mul, div } = require('./calculator');

const sum = add(5,3);
const diff = sub(5,3);
const prod = mul(5,3);
const quot = div(5,3);

console.log(`덧셈: ${sum}`);
console.log(`뺄셈: ${diff}`);
console.log(`곱셈: ${prod}`);
console.log(`나눗셈: ${quot}`);