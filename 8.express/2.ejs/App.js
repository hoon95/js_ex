const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './template');     // view 폴더인 경우 생략 가능(만약 view 파일들이 template라는 폴더에 있을 경우 추가 작성)

