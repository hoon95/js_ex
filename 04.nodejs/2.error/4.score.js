const scores = [85, 90, 'invalid', 78, 88];
let sum = 0;

// 학생 시험 점수의 합산 구하기
for (let i=0; i<scores.length; i++){
    try {
        if(typeof scores[i] !== 'number'){
            throw new Error("number error");
        }
        sum += scores[i];
    } catch (error) {
        console.log(error.message);
    }
}

// 평균
const average = sum / scores.length;
try {
    if(average < 80){
        throw new Error("불합격");
    }
    console.log('합격');
} catch (error) {
    console.log(error.message);
}
