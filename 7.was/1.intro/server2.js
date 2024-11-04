// const fs = require('fs').promises;
// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type' : 'text/html; charset=utf-8' });
//     res.write('<h1>3000번 test</h1>');
//     res.end('<p>종료</p>');
// })
// .listen(3000, () => {
//     console.log('3000번 서버 실행');
// })

// 파일로부터 내용 불러오기
// const data = fs.readFileSync('./index.html');
// http.createServer((req, res) => {
//     res.write(data);
//     res.end();
// })
// .listen(5000, () => {
//     console.log('5000번 서버 실행');
// })


// function readFilePromise(filePath) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// http.createServer(async (req, res) => {
//     try {
//         // const data = await readFilePromise('./index.html');     fs.promises를 통해 함수 하나 덜 짬
//         const data = await fs.readFile('./index.html');
//         res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'} );
//         res.end(data);
//     } catch (err) {
//         console.error(err);
//         res.writeHead(500, { 'Content-Type' : 'text/html; charset=utf-8' });
//         res.end('알 수 없는 오류');
//     }
// })
// .listen(3000, () => {
//     console.log('3000번 서버 실행');
// });

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        let data;
        switch(req.url) {
            case "/" :
                data = await fs.readFile('./index.html');
                res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'} );
                res.end(data);
            case "/about" :
                data = await fs.readFile('./about.html');        
                res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'} );
                res.end(data);
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type' : 'text/html; charset=utf-8' });
        res.end('알 수 없는 오류');
    }
})
.listen(3000, () => {
    console.log('3000번 서버 실행');
});