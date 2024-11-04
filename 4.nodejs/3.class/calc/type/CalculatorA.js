class CalculatorA {
    constructor() {
        this.rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    calculator() {
        this.rl.question('첫 번째 숫자 : ', (num1) => {
            this.rl.question('연산자 : ', (operator) => {
                this.rl.question('두 번째 숫자 : ', (num2) => {
                    const a = Number(num1);
                    const b = Number(num2);

                    let result;
                    switch (operator) {
                        case '+':
                            result =  a + b;
                        case '-':
                            result = a - b;
                        case '*':
                            result = a * b;
                        case '/':
                            result = a / b;
                        default :
                            result = '올바른 값을 입력해주세요';
                    }
                    
                    console.log(result);
                    this.rl.close();
                })
            })
        })
    }
}

module.exports = CalculatorA;