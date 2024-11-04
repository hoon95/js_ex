// 삼각형 그리기
function drawStar1(n) {
    for(let i=1; i<=n; i++){
        let stars = "";
        for(let j=1; j<=i; j++){ 
            stars += "*";
        }
        console.log(stars);
    }
}

function drawStar2(n) {
    for(let i=1; i<=n; i++){
        let stars = "";
        for(let j=0; j<=n-i; j++){ 
            stars += "*";
        }
        console.log(stars);
    }
}

function drawStar3(n) {
    for(let i=1; i<=n; i++){
        let stars = "";
        for(let j=0; j<=n-i; j++){ 
            stars += " ";
        }
        for(let k=1; k<=i; k++){
            stars += "*";
        }
        console.log(stars);
    }
}

function drawStar4(n) {
    for(let i=1; i<=n; i++){
        let stars = "";
        for(let k=1; k<=i; k++){
            stars += " ";
        }
        for(let j=0; j<=n-i; j++){ 
            stars += "*";
        }
        console.log(stars);
    }
}

function drawStar5(n) {
    for(let i=1; i<=n; i++){
        let stars = "";
        for(let j=0; j<=n-i; j++){ 
            stars += " ";
        }
        for(let k=1; k<=(2*i)-1; k++){
            stars += "*";
        }
        console.log(stars);
    }
}
function drawStar6(n) {
    for(let i=1; i<=n; i++){
        let stars = "";
        for(let k=1; k<=i; k++){
            stars += " ";
        }
        for(let j=1; j<=(2*n)-(2*i)+1; j++){ 
            stars += "*";
        }
        console.log(stars);
    }
}

drawStar1(5);
drawStar2(5);
drawStar3(5);
drawStar4(5);
drawStar5(5);
drawStar6(5);

console.log('');
console.log('');

function heart(n) {
    for(let i=1; i<=n; i++){
        let stars = "";
        for(let j=0; j<=n-i; j++){ 
            stars += " ";
        }
        for(let k=1; k<=(2*i)-1; k++){
            stars += "*";
        }
        for(let j=0; j<n-i; j++){ 
            stars += " ";
        }
        for(let j=0; j<=n-i; j++){ 
            stars += " ";
        }
        for(let k=1; k<=(2*i)-1; k++){
            stars += "*";
        }
        for(let j=0; j<=n-i; j++){ 
            stars += " ";
        }
        console.log(stars);
    }

    let centerStar = "";
    for(let i=1; i<=(n*4)+1; i++){ 
        centerStar += "*";
    }
    console.log(centerStar);

    for(let i=1; i<=n; i++){
        let stars = "";
        for(let k=0; k<=(2*i)-1; k++){
            stars += " ";
        }
        for(let j=1; j<=(4*n)-(4*i)+1; j++){ 
            stars += "*";
        }
        console.log(stars);
    }

}

heart(5);