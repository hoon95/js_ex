const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
}));

// 정적 파일 사용 설정
app.use(express.static('public'));

// 로그인 페이지 전송
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// 로그인 처리
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        req.session.user = { username: 'admin' };
        req.session.cart = []; // 로그인 시 장바구니 초기화
        res.redirect('/cart');
    } else {
        res.send('로그인 실패. 다시 시도하세요.');
    }
});

// 상품 추가를 처리하는 라우터
app.post('/add-to-cart', (req, res) => {
    const { name, price } = req.body;
    if (!req.session.cart) req.session.cart = [];
    req.session.cart.push({ name, price });
    res.json({ message: `${name}이(가) 장바구니에 추가되었습니다.` });
});

// 장바구니 페이지 라우터
app.get('/cart', (req, res) => {
    if (!req.session.user) {
        res.redirect('/');  // 로그인 안 되어 있으면 로그인 화면으로 이동
    } else {
        // 장바구니 내용 요약
        let cartSummary = {};
        req.session.cart.forEach(item => {
            if (cartSummary[item.name]) {
                cartSummary[item.name].quantity += 1;
                cartSummary[item.name].totalPrice += item.price;
            } else {
                cartSummary[item.name] = {
                    price: item.price,
                    quantity: 1,
                    totalPrice: item.price
                };
            }
        });

        let cartHtml = `<h1>장바구니</h1><ul>`;
        let totalSum = 0;
        for (let itemName in cartSummary) {
            let item = cartSummary[itemName];
            cartHtml += `
                <li>
                    ${itemName} ${item.price}원 - 
                    <button onclick="updateQuantity('${itemName}', 'decrease')">-</button>
                    ${item.quantity}
                    <button onclick="updateQuantity('${itemName}', 'increase')">+</button> = 
                    ${item.totalPrice}원
                </li>
            `;
            totalSum += item.totalPrice;
        }

        cartHtml += `</ul><h2>합계: ${totalSum}원</h2>`;
        cartHtml += `<a href="/index">상품 목록으로 돌아가기</a>`; // 변경된 경로
        cartHtml += `<script>
                        function updateQuantity(itemName, action) {
                            fetch('/cart/update', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ itemName, action })
                            }).then(response => response.json())
                            .then(data => {
                                if (data.success) {
                                    location.reload();  // 수량 변경 후 페이지 리로드
                                }
                            })
                            .catch(error => console.error('Error updating quantity:', error));  // 에러 처리 추가
                        }
                     </script>`;

        res.send(cartHtml);
    }
});

// 장바구니 업데이트
app.post('/cart/update', (req, res) => {
    const { itemName, action } = req.body;

    if (req.session.cart) {
        let item = req.session.cart.find(i => i.name === itemName);

        if (item) {
            if (action === 'increase') {
                item.quantity += 1;
                item.totalPrice += item.price;
            } else if (action === 'decrease' && item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice -= item.price;
            }
            // 성공적으로 업데이트된 장바구니를 응답
            res.json({ success: true });
        } else {
            res.status(400).json({ success: false, message: 'Item not found in cart' });
        }
    } else {
        res.status(400).json({ success: false, message: 'Cart is empty' });
    }
});

// 상품 목록 페이지
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});