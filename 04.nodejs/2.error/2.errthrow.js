function divide(a,b){
    try {
        if(b === 0){
            throw '0으로 나눌 수 없습니다';
        }
        return a / b;
        
    } catch (error) {
        return `Error : ${error}`;
    }
}
// console.log(divide(5,0));

// 오류를 Error 객체에 담아서 변환
function divide2(a,b){
    try {
        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('숫자만 입력하세요');
        }
        if(b === 0){
            throw new Error('0으로 나눌 수 없습니다2');
        }
        return a / b;
        
    } catch (error) {
        return 'Error : ' + error.message;
    } finally {
        console.log('무적권 실행');
    }
}
console.log(divide2(5,0));
console.log(divide2(5,"String"));