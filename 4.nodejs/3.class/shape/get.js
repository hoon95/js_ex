class Shape {
    constructor(type){
        this.type = type;
    }
    getArea() {
        throw new Error("올바르지 않은 함수명");
    }

    getInfo() {
        throw new Error("올바르지 않은 함수명");
    }

    toString() {
        return `${this.type}`;
    }
}

class Square extends Shape {
    constructor(number) {
        super('Square');
        this.number = number;
    }
    getArea() {
        return (this.number ** 2).toFixed(2);
    }

    getInfo() {
        return `Square with side length ${this.number}. `;
    }

    toString() {
        return `${this.type} - Area: ${this.getArea()}`
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super('Triangle');
        this.width = width;
        this.height = height;
    }
    getArea() {
        return `Triangle - Area: ${((this.width * this.height) / 2).toFixed(2)} m²`;
    }

    getInfo() {
        return `Triangle with base ${this.width} and height ${this.height}. `;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }
    getArea() {
        return `Circle - Area: ${(Math.PI * this.radius ** 2).toFixed(2)} m²`;
    }

    getInfo() {
        return `Circle with radius ${this.radius}. `;
    }
}

class Trapezium extends Shape {
    constructor(baseTop, baseBottom, height) {
        super('Trapezium');
        this.baseTop = baseTop;
        this.baseBottom = baseBottom;
        this.height = height;
    }
    getArea() {
        return `Trapezium - Area: ${(((this.baseTop + this.baseBottom) / 2) * this.height).toFixed(2)} m²`;
    }

    getInfo() {
        return `Trapezium with base1 ${this.baseTop}, base2 ${this.baseBottom}, and height ${this.height}. `;
    }
}

// 미션2. 객체들의 정보 출력 (getInfo())
const square = new Square(5);
const triangle = new Triangle(4, 3);
const trapezium = new Trapezium(4, 6, 5);
const circle = new Circle(3);

console.log(square.getInfo(), square.getArea());
console.log(triangle.getInfo());
console.log(trapezium.getInfo());
console.log(circle.getInfo());


// 미션3. 이 객체를 출력해서 원하는 스트링 얻기
console.log(`${square}`); // 출력: Square - Area: 25.00 m²
console.log(`${triangle}`); // 출력: Triangle - Area: 6.00 m²
console.log(`${trapezium}`); // 출력: Trapezium - Area: 25.00 m²
console.log(`${circle}`); // 출력: Circle - Area: 28.27 m²
