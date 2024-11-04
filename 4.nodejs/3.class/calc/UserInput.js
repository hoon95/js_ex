const CalculatorA = require('./type/CalculatorA');
const CalculatorB = require('./type/CalculatorB');
const CalculatorC = require('./type/CalculatorC');

class UserInput{
    constructor(){
        // this.calculator = new Calculator();
        this.rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });    
    }

    selectCalculatorMode() {
        console.log('계산 종류를 선택하세요');
        console.log('1. 공학용 계산기');
        console.log('2. 표준 계산기');
        console.log('3. 프로그래머용 계산기');

        this.rl.question('(1/2/3) : ', (type) => {
            switch (type) {
                case '1':
                    this.calculator = new CalculatorA();
                    this.calculator.calculator();
                    break;
            }
        })
    }
}

const userInput = new UserInput();
userInput.selectCalculatorMode();