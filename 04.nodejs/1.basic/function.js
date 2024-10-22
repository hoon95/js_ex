// 입력값을 인자로 받아 처리

function sum_to_n(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(`1부터 ${1_000_000_000}의 합: `, sum_to_n(1_000_000_000));