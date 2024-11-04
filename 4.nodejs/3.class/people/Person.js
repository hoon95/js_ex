class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log(`이름은 ${this.name}, 나이는 ${this.age}, 성별은 ${this.gender}`);
    }
    walk() {
        console.log(`${this.name}이(가) 걷고있다`);
    }
    eat() {
        console.log(`${this.name}이(가) 식사중이다`);
    }
}

module.exports = Person;