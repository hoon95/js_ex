const Person = require('./people/Person');
const Employee = require('./people/Employee');

// 변수 선언 : Hosting O
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        return `${this.make} ${this.model} is driving`;
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.drive());

// 변수 할당 : Hoisting X
const Car2 = class {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    
    drive() {
        return `${this.make} ${this.model} is driving`;
    }
}

const myCar2 = new Car2('Toyota', 'Corolla');
console.log(myCar2.drive());

// Getter/Setter
class Circle {
    constructor(radius) {
        this._radius = radius;      // private(통념상 사용)
    }

    get diameter() {        // 함수처럼 생겼지만 변수취급
        return this._radius * 2;
    }

    set diameter(diameter) {
        this._radius = diameter / 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.diameter);

// Static Methods
class MathOperations {
    static add(x, y) {
        return x + y;
    }
}

// const sum = new MathOperations();   // instantiation : 객체를 생성, 실체화
// console.log(sum.add(2,3));

const sum = MathOperations.add(2,4);
console.log(sum);

// 상속
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "동물소리"
    }
}

class Dog extends Animal{
    makeSound() {
        return "멍멍";
    }
}

const myDog = new Dog();
console.log(myDog.makeSound());

const person1 = new Person('철수', 25, '남성');
person1.greet();
person1.walk();
person1.eat();

console.log('');

 const employee1 = new Employee('영희', 30, '여성', '매니저', 50000);
 const employee2 = new Employee('영희', 30, '여성', 50000);

 employee1.walk();  // 상속
 employee1.greet();  // 상속
 employee1.displayInfo();
 employee1.work();

 console.log('----');
 employee2.displayInfo();
 console.log('----');

 console.log(employee1 instanceof Employee);    // 직원1 - 직원 객체(T)
 console.log(employee1 instanceof Person);      // 직원1 - 사람(T)

 console.log(person1 instanceof Employee);      // 사람1 - 직원(F)
 console.log(person1 instanceof Person);        // 사람1 - 사람(T)

 class Manager extends Employee {
    // Employee를 여러 번 상속시킬 수 있다
    // 한 번에 여러개를 상속받을 순 없다

    constructor(name, age, gender, jobTitle, salary, team) {
        super(name, age, gender, jobTitle, salary);
        this.team = team;
    }

    assignTask() {
        console.log(`${this.name} 매니저가 ${this.team}에 업무를 분배합니다.`);
    }
 }

 const manager1 = new Manager('수현', 35, '남성', '팀장', 60000, '개발팀');
 manager1.assignTask();


 const student1 = new Customer('지연', 20, '여성', '20240101', '컴퓨터공학');
 student1.greet();

 const customer1 = new Customer('지민', 22, '여성', 'C1001', ['커피', '라떼']);
 customer1.placeOrder("생크림케익");
 customer1.printOrderHistory();

 console.log('-'.repeat(50));

 const people = [manager1, student1, customer1, employee1, employee2];
 function introduce(people){
    for(const person of people) {
        person.greet('철수');
    }

    for(let i=0; i<people.length; i++){
        people[i].walk(Math.floor(Math.random() * 10 + 1));
    }
 }

 introduce(people);