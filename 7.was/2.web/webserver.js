const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// const parse = require('querystring').parse;

// Destructuring
const { parse } = require('querystring');

const server = http.createServer(async (req, res) => {
    console.log(req.method, req.url);

    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                const data = await fs.readFile('./index.html');
                res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                res.end(data);
            } else if (req.url === '/about') {
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                res.end(data);
            } else if (req.url.startsWith('/image/')) {
                console.log(`이미지 파일명 추출은?? ${req.url}`);
                const imageName = path.basename(req.url);
                const imagePath = path.join('static', imageName);

                console.log(`이미지 경로: ${imagePath}`);
                const imageData = await fs.readFile(imagePath);
                res.writeHead(200, {'Content-Type':'image/jpg'});
                res.end(imageData);
            } else {
                res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
                res.end('Not Found');
            }
        } else if (req.method === 'POST') {
            if (req.url === '/user') {
                let body = '';

                req.on('data', (data) => {
                    body += data;
                    console.log(`데이터가 받아지는동안의 chunk: ${data}`);
                });

                req.on('end', () => {
                    console.log(`데이터가 다 받으진 후: ${body}`);
                });

                const formData = parse(body); // 문자열 name=aaa 가 객체타입으로 변환되었음..

                console.log('받은데이터는??', formData);
                const username = formData.name;
                console.log('그래서 유저네임은??', username);
            } else {
                res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
                res.end('Not Found');
            }
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
        res.end('알수 없는 오류... 관리자 문의...');
    }
});

server.listen(3000, () => {
    console.log('서버 대기중.. on 3000번에서...');
});