const http = require('http');
const readline = require('readline');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type' : 'text/html; charset=utf-8' });
    res.write('<h1>제목을 입력하세요</h1>');
    res.end('<p>안녕</p>');
    req.on('close', () => {
        console.log('close');
    })
});

// server.on('connection', () => {
//     console.log('Connecting User');
// })

server.listen(3000, () => {     // 127.0.0.1:3000 : 3000 socker을 listen하는 중
    console.log('Server is Running on http://localhost:3000');
});
server.on('close', () => {
    console.log('Server close');
})

// const timer = setTimeout(() => {
//     server.close();
// }, 3000);

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

rl.on('line', (input) => {
    if (input=='q') {
        console.log('q키가 입력되었습니다');
        server.close();
        rl.close();
    }
})

/*
server.on('request', (req, res) => {
    console.log(`Send Request : ${req.method}`);    GET
    console.log(`Send Request : ${req.url}`);
    console.log(req.headers);                       { host: 'localhost:3000', 'user-agent': 'curl/8.9.1', ...}
    console.log(JSON.stringify(req.headers));       {"host":"localhost:3000","user-agent":"curl/8.9.1", ...}

    res.end('<p>hello</p>');
})
*/