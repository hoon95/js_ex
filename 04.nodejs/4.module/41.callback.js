function greet(name, sesac) {
    const message = `안녕, ${name}`;
    sesac(message);
}

function displayGreeting1(greeting) {
    console.log(greeting);
}

function displayGreeting2(greeting) {
    console.log(`<h1>${greeting}</h1>`);
}

greet('홍길동', displayGreeting1);
greet('홍길동', displayGreeting2);

function add(a, b, callback) {
    const sum = a+b;
    callback(sum);
}

function displaySum(result) {
    console.log(`두 수의 합은 ${result}`);
}

add(3, 4, displaySum);