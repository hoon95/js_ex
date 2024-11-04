const Car = require('./Car');

class SUV extends Car{
    constructor(brand, model, color) {
        super(brand, model, color);
    }

    offRoad() {
        console.log(`${this.brand}의 트렁크가 열렸습니다.`)
    }
}

module.exports = SUV;