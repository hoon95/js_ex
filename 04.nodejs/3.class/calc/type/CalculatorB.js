class CalculatorB {
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

module.exports = CalculatorB;