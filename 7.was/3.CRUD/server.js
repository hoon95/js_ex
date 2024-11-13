const fs = require('fs');
const express = require('express');
const app = express();

app.use('/static/', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
            <li class="text-slate-800 mb-3">
                ID : ${item.userid}
                Name: ${item.username}
                <a href='/user/update?userid=${id}' class="text-slate-500 text-sm")>수정</a>
                <a href='/user/delete?userid=${id}' class="text-slate-500 text-sm")>삭제</a>
            </li>
        `;
    })
    data = data.replace('${userList}', userList);

    res.setHeader('Content-Type', 'text/html');
    res.send(data);
});

app.post('/user', (req, res) => {
    userArr.push({ userid : req.body.username, username : req.body.username });
    res.send(`
        <script>
                alert('등록 완료');
                history.back();
        </script>
    `);
});

app.get('/user/update', (req, res) => {
    const userIdx = req.query.userid;
    res.send(`
        <script>
            const updateInfo = prompt('수정할 이름을 입력하세요.');
            if(updateInfo) {
                fetch('/user/update', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: ${userIdx}, name: updateInfo })
                })
            }
            history.back();
        </script>
    `);
});

app.post('/user/update', (req, res) => {
    const { id, name } = req.body;
    userArr[id].username = name;
    console.log(userArr);
    
    res.send(`
        <script>
            alert('수정 완료');
            history.back();
            location.reload();
        </script>
    `);
});

app.get('/user/delete', (req, res) => {
    userArr.splice(Number(req.query.userid), 1);
    res.redirect('/user');
});

app.listen(5000, () => {
    console.log('express 실행');
});