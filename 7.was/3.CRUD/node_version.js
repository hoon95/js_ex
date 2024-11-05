const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    if (req.method === 'GET') {
        handleGetRequest(req, res);
    } else if (req.method === 'POST') {
        handlePostRequest(req, res);
    } else if (req.method === 'UPDATE') {
        handleUpdateRequest(req, res);
    } else if (req.method === 'DELETE') {
        handleDeleteRequest(req, res);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }

    res.end('처리 완료');
});

server.listen(3000, () => {
    console.log('3000 port on');
})

function handleGetRequest(req, res) {
    if (req.url === '/') {
        res.end('GET 요청 / 응답완료');
    } else if (req.url === '/about') {
        res.end('GET 요청 /about 응답완료');
    // } else if() {
        
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
}

function handlePostRequest(req, res) {
    if (req.url === '/user') {
        let body = '';
        req.on('data', (data) => (body += data));

        req.on('end', () => {
            // 데이터가 다 쌓였을 때 할 일
            if (req.headers['content-type'] === 'text/plain') {
                return res.end('plaintext');
            } else if (req.header['content-type'] === 'application/json') {
                const parsedData = JSON.parse(body);
                // const username = parsedData.name;

                return res.end('application/json');
            } else {
                res.writeHead(404);
                return res.end('Unknown type');
            }
        })
    }

    res.end('POST 요청 응답완료');
}
function handleUpdateRequest(req, res) {
    res.end();
}
function handleDeleteRequest(req, res) {
    res.end();
}

