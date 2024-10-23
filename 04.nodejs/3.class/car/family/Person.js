class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet() {
        console.log(`${this.name}은(는) ${this.age}세 이고, ${this.gender}입니다.`)
    }
    getInCar(car) {
        console.log(`이름 : ${this.name}, 나이 : ${this.age}, ${car.brand} 브랜드의 ${car.model} 모델입니다. 가격은 ${car.price}`);
    }
}

module.exports = Person;