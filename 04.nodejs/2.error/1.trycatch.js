// 과거 언어 : 모든 예외 처리를 if else로 수행
// 모던 언어 : JAVA 이후의 언어 (JS, Python, Golang, ...)

// const undefinedVariable = 10;

try {
    const result = undefinedVariable * 2;
    console.log(result);
} catch(error) {
    if(error instanceof ReferenceError) {
        console.log(error.message);     // undefinedVariable is not defined
    }
}

console.log('-----------');

// 구문 오류(SyntaxError)
try {
    sum = eval("1++2");
    console.log(sum);
} catch (error) {
    if(error instanceof SyntaxError){
        console.log(error.message);     // Invalid left-hand side expression in postfix operation
    }
}

// 타입 오류(TypeError)
try {
    let obj = null;
    obj.method();
} catch (error) {
    if(error instanceof TypeError){
        console.log(error.message);     // Cannot read properties of null (reading 'method')
    }
}

// 범위 오류(RangeError)
try {
    let array = new Array(-1);
} catch (error) {
    if(error instanceof RangeError){
        console.log(error.message);     // Invalid array length
    }
}

try {
    // 실제 여러가지 코드 내용
    invalidFunc();
} catch (error) {
    if(error instanceof TypeError){
        console.log('Type Error', error.message);
    }else if(error instanceof ReferenceError){
        console.log('Reference Error', error.message);
    }else if(error instanceof RangeError){
        console.log('Range Error', error.message);
    }else{
        console.log('Undefined Error', error.message);
    }
}