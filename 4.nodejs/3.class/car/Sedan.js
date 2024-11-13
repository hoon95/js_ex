const Car = require('./Car');

class Sedan extends Car{
    constructor(brand, model, color, price) {
        super(brand, model, color);
        this.price = price;
    }

    openTrunk() {
        console.log(`${brand} 브랜드의 ${color}색 ${model}은(는) ${this.price}만원 입니다`);
    }
}

module.exports = Sedan;