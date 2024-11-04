const fs = require('fs');
const express = require('express');
const app = express();

app.use('/static/', express.static('static'));
app.use(express.urlencoded({ extended: true }));

let userArr = []; // userArr를 여기에 이동

app.get('/', (req, res) => {
    const data = fs.readFileSync('./index.html', 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
});

app.get('/about', (req, res) => {
    const data = fs.readFileSync('./about.html', 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
});

app.get('/user', (req, res) => {
    let data = fs.readFileSync('./user.html', 'utf-8');
    let userList = ''; // 초기화
    userArr.forEach((item, id) => {
        userList += `
            <li>${item.username} <a href='/user/delete?userid=${id}'>삭제</a></li>
        `;
    });
    data = data.replace('${userList}', userList); // 수정

    res.setHeader('Content-Type', 'text/html');
    res.send(data);
});

app.post('/user', (req, res) => {
    userArr.push({ username: req.body.username });
    res.redirect('/user');
});

// 사용자 삭제 처리
app.get('/user/delete', (req, res) => {
    const userId = parseInt(req.query.userid);
    if (!isNaN(userId) && userId >= 0 && userId < userArr.length) {
        userArr.splice(userId, 1); // 해당 사용자 삭제
        res.redirect('/user');
    } else {
        res.status(400).send('잘못된 사용자 ID입니다.');
    }
});

app.listen(5000, () => {
    console.log('express 실행');
});
