/* 
    0. 메뉴를 띄운다 (잔액확인, 입금, 출금, 종료)
    1. 잔액을 출력한다. (기본 0원)
    2. 입금기능 (숫자를 입력받아서, 입금한다, 잔액 증액됨)
    3. 인출기능 (잔액을 확인해서, 더 큰걸 요청하면 잔액이 부족하다고 출력한다)
    4. 종료한다.
*/

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
let money = 0;

const ATM = () => {
    console.log(`
ATM 메뉴:  
    1. 잔액 확인
    2. 입금
    3. 인출
    4. 종료`);
    rl.question('원하는 작업을 선택하세요 : ', 
        (answer) => {
        switch (answer) {
            case '1':   // 잔액 확인
                console.log(`=> 현재 잔액은 ${money}원 입니다.`);
                ATM();
                break;
            case '2':   // 입금
            rl.question('입금할 금액을 입력하세요 : ', (depo) => {
                const depoMoney = Number(depo);
                money += depoMoney;
                console.log(`${depoMoney}원이 입금되었습니다.`);
                ATM();
            });
            break;
            case '3':   // 인출
                rl.question('인출할 금액을 입력하세요 : ', (withdraw) => {
                    const withDrawMoney = Number(withdraw);
                    if(money < withDrawMoney){
                        console.log(`=> 잔액이 부족합니다. 현재 잔액은 ${money}원 입니다`)
                        ATM();
                    } else {
                        money -= withDrawMoney;
                        ATM();
                    }
                });
                break;
            case '4':   // 종료
                console.log('=> ATM을 종료합니다.');
                rl.close();
                break;
        }
        return answer;
    });
}

ATM();