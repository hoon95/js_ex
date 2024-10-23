class Car {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    start() {
        console.log(`${this.brand}브랜드의 ${this.color}, ${this.model}이(가) 출발했습니다`);
    }
    stop() {
        console.log(`${this.brand}브랜드의 ${this.color}, ${this.model}이(가) 정지했습니다`);
    }
    drive() {
        console.log(`${this.brand}브랜드의 ${this.color}, ${this.model}이(가) 정지했습니다`);
        
    }
}

module.exports = Car;