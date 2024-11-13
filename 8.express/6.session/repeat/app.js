const express = require('express');
const session = require('express-session');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static('public'));

// 계정, 상품정보 등
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

const products = [
    { id: 1, name: '상품1', price: 2000 },
    { id: 2, name: '상품2', price: 3000 },
    { id: 3, name: '상품3', price: 1500 },
];


app.get('/', (req, res) => {
    const user = req.session.user;
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'), user);
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'cart.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'products.html'));
});


// REST API
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if(user) {
        req.session.user = user;
        res.json({ message: 'Success to Login', username: user.username });
    } else {
        res.status(401).json({ message: 'Failed to Login' });
    }
});

app.get('/api/logout', (req, res) => {
    res.session.destroy();
});

app.get('/api/check-login', (req, res) => {
    const user = req.session.user;
    
    if (user) {
        res.json({ username: user.username });
    } else {
        res.status(401).json({ message: '인증되지 않은 사용자' });
    }
});

app.get('/api/products', (req, res) => {
    res.json(products);
});


app.listen(port, (req, res) => {
    console.log(`Server is running on localhost:${port}`);
})