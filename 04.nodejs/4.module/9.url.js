// const url = require('url');
const myURL = new URL('https://www.example.com/api/path?query=value');

// parsing URL
console.log(typeof myURL);

// 1. Host명 출력
console.log(myURL.hostname);

// 2. 경로 출력
console.log(myURL.pathname);

// 3. 쿼리 파라미터 출력
console.log(myURL.search);

// 내가 경로를 조립해서 만들기
const myURL2 = {
    protocol: 'https',
    hostname: 'sesac.com',
    pathname: 'myservice/mypath/dir1',
}