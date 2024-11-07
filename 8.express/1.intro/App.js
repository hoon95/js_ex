const express = require('express');
const app = express();

// Middleware : 서버 애플리케이션(ex.Express)에서 클라이언트의 요청과 
// 서버의 응답 사이에 위치하여 특정 작업을 수행하는 함수
app.use((req, res ,next) => {
    // 요청을 처리하거나 로그 작성 등 중간 작업 수행
    console.log(`Request received: ${req.method} ${req.url}`);
    next();     // 다음 미들웨어 또는 라우트로 이동
});

// 1. 요청 데이터를 가공하는 미들웨어
app.use(express.urlencoded({ extended : true }));   // URL 인코딩 데이터 처리
app.use(express.json());    // JSON 데이터 파싱

/* 참고 : deprecate middleware
    express 버전 업그레이드로 자체 내장(express.json())

    const bodyParser = require('body-parser');
    app.use(bodyParser.json());     // body 안에 있는 내용을 json 처리하여 body라는 변수에 담아줌
    app.post('/submit2', (req, res) => {
        const jsonData = req.body;      // req.body에 파싱된 JSON데이터를 담아 보내줌
        res.json({ receivedData: jsonData });
    })
*/

// 2. 정적 파일 제공 미들웨어
app.use(express.static('static'));
app.get('/', (req, res) => {
    res.send(`<img src='/static/cat.jpg alt="야옹"'>`);
})

// 3. 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error message');
});

/*
    ---------------------------------------------------------------------
*/

// Route parameter, Query parameter
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    res.send(`검색어: ${keyword}`);
});

// Async error handling
const asyncHandler = require('expreess-async-handler');
app.get('/async-route', asyncHandler(async (req, res) => {
    const result = await someAsyncFunction();   // 비동기 특정 함수
    res.send(result);
}))

// CORS(Cross Origin Resource Sharing) : 특정 도메인에서만 접근 허용
const cors = require('cors');
app.use(cors({ origin: 'http://example.com' }));

// EJS : Template Engine
app.set('view engine', 'ejs');
app.get('/about', (req, res) => {
    res.render('about', { name : 'Hoon' });
});

// Session, Cookie
const session = require('express-session');
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    req.session.username = 'Hoon';
    res.send(`Hello, ${req.session.usename}`);
})

// rateLimit
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,    // 1min
    max: 5      // 1분에 최대 5회
})
app.use('/api', limiter);

// throw Error
app.get('/error', (req, res) => {
    throw new Error('강제로 에러 유발');
});

app.post('/submit', (req, res) => {
    let data = '';

    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
        try {
            const jsonData = JSON.parse(data);
            res.json({ receivedData : jsonData });
        } catch (error) {
            res.status(400).json({ error: '잘못 된 형식의 JSON 입니다' });
        }
    })
});

// File send
// const fs = require('fs').promises;
app.get('/sendfile', async (req, res) => {
    const htmlfile = path.join(__dirname, 'public', 'index.html');
    res.setHeader('Content-Type', 'text/html');     // MIME type setting

    // const data = await fs.readFile(htmlfile);
    // res.status(201).send(data);

    res.sendFile(htmlfile, (err) => {
        if (err) {
            // throw new Error('File Error');
            res.status(500).send('File Error');
        }
    });
});

// 여기까지 왔는데 매칭되는 라우트가 없는 경우
app.use((req, res) => {
    res.status(404).send('존재하지 않는 라우트');
});

app.use((err, req, res, next) => {
    res.status(500).json({ message : 'Server Error' });
    res.status(500).send('Server Error');
})

app.listen(3000, () => {
    console.log('Server is ready');
});