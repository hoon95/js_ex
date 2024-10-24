class Shape {
    getArea() {
        throw new Error("올바르지 않은 함수명");        // 이름이 동일하지 않은 함수에 대해 에러 반환
    }
}

class Square extends Shape {
    constructor(number) {
        super();
        this.number = number;
    }
    getArea() {
        return this.number ** 2;
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Trapezium extends Shape {
    constructor(baseTop, baseBottom, height) {
        super();
        this.baseTop = baseTop;
        this.baseBottom = baseBottom;
        this.height = height;
    }
    getArea() {
        return ((this.baseTop + this.baseBottom) / 2) * this.height;
    }
}
// 사용 예시
const square = new Square(5);
const triangle = new Triangle(4, 3);
const trapezium = new Trapezium(4, 6, 5);
const circle = new Circle(3);

console.log('Square Area:', square.getArea()); // 출력: 25
console.log('Triangle Area:', triangle.getArea()); // 출력: 6
console.log('Trapezium Area:', trapezium.getArea()); // 출력: 25
console.log('Circle Area:', circle.getArea().toFixed(2)); // 출력: 28.27