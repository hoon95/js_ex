function checkAge(age){
    if (age < 0 || age > 150) {
        throw new Error("유효하지 않은 나이입니다");
    }
    return `나이 : ${age}`;
}

console.log(checkAge(10));

// 호출하는 시점에서 에러처리
try {
    console.log(checkAge(152));
} catch (error) {
    console.log(`Error : ${error.message}`);
}