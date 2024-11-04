    // Mission 1. 1 ~ 100 숫자 맞추기
    // Mission 2. 입력한 값들의 로그를 출력하기
    let answer = ((Math.random() * 100) + 1).toFixed(),
        inputNum = document.querySelector('#number'),
        guessBtn = document.querySelector('#button'),
        result = document.querySelector('#result');

    console.log(`정답 : ${answer}`);

    guessBtn.addEventListener('click', () => {
        let inputVal = inputNum.value;
        if(inputVal > answer) {
            result.innerHTML += `You guess ${inputVal} : Too High!<br>`;
        } else if(inputVal < answer) {
            result.innerHTML += `You guess ${inputVal} : Too low!<br>`;
        } else if(inputVal == answer) {
            result.innerHTML += `You guess ${inputVal} : Correct!<br>`;
        }
    })