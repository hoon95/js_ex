// 모듈 import
const express = require('express');
const path = require('path');


// 변수 정의
const app = express();
const PORT = 3000;


// 미들웨어 설정
app.use('static', express.static('static'));
app.use('image', express.static('static/image'));

app.use(express.json());


// 라우트 설정
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));       // or path.resolve()
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/user', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    const { name } = req.body;
    users[name] = name;
    res.status(201).send('등록 성공');
});

app.put('/user:id', (req, res) => {
    res.send('');
});

app.delete('/user:id', (req, res) => {
    res.send('');
});


// 예외 처리



// Run Server
app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에 실행되었습니다.`);
})