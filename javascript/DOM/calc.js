document.addEventListener("DOMContentLoaded", () => {
    let calcInput = document.querySelector('input'),
        // calcBtn = document.querySelectorAll('#calcBtn tr td');
        calcBtn = document.querySelectorAll('button');

    for(calc of calcBtn) {
        calc.addEventListener('click', (e) => {
            let calcTarget = e.target.innerText;
            
            if(calcTarget == 'C') {
                calcInput.value = '';
            } else if(calcTarget == '=') {
                calcInput.value = eval(calcInput.value);
            } else if(calcInput.value == 'NaN'){
                calcInput.value = Number(0);
            } else {
                calcInput.value += calcTarget;
            }

        })
    }
});