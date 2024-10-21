// reduce()
const numbers = [1,2,3,4,5];
                            // (이전 리턴 값, 현재 값)    => 함수연산 , 초기 값
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('모든 수의 덧셈 : ', sum);

// 모든 수의 곱셈
const product = numbers.reduce((accumulator, curValue) => accumulator * curValue, 1);
console.log('모든 수의 곱셈 : ', product);

// 배열에서 가장 큰 값
const max = numbers.reduce((accumulator, curValue) => accumulator < curValue ? curValue : accumulator);
console.log('가장 큰 값 : ', max);
console.log('가장 큰 값 : ', Math.max(...numbers));

// max 함수를 구현한다면?
const numbers2 = [10, 5, 20, 8, 15];

function myMax(numbers) {
    let max = numbers[0];
    for (let i=1; i<numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(myMax(numbers2));
