const fs = require('fs');
const express = require('express');
const app = express();

app.use('/static/', express.static('static'));
app.use(express.urlencoded({ extended: true }));

let userArr = [];

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
    let userList = [];
    userArr.map((item, id) => {
        userList += `
            <li class="text-sm/6 font-medium text-gray-900">
                ${item.username}
                <a href='/user/delete?userid=${id}')>삭제</a>
            </li>
        `;
    })
    data = data.replace('${userList}', userList);

    res.setHeader('Content-Type', 'text/html');
    res.send(data);
});

app.post('/user', (req, res) => {
    userArr.push({ username : req.body.username });
    res.redirect('/user');
});

app.get('/user/delete', (req, res) => {
    userArr.splice(Number(req.query.userid), 1);
    res.redirect('/user');
})

app.listen(5000, () => {
    console.log('express 실행');
});

