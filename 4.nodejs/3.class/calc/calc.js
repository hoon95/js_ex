class Calculator {
    calculator(num1, operator, num2) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default :
                return '올바른 값을 입력해주세요';
        }
    }
}

class UserInput {
    constructor(calculator){
        this.calculator = calculator;
        this.rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    getUserInput() {
        this.rl.question('첫 번째 숫자를 입력하세요: ', (num1) => {
            this.rl.question('연산자를 입력하세요(+,-,*,/): ', (operator) => {
                this.rl.question('두 번째 숫자를 입력하세요: ', (num2) => {
                    const a = Number(num1);
                    const b = Number(num2);
                    const result = this.calculator.calculator(a, operator, b);
                    console.log(`결과: ${result}`);
                    this.rl.close();
                })
            })
        });
    }
}

const calculator = new Calculator();
const userInput = new UserInput(calculator);
userInput.getUserInput();