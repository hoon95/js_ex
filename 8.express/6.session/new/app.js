const express = require('express');
const app = express();
const session = require('express-session');
const nunjucks = require('nunjucks');
const path = require('path');
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(expree.json());
app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000,
        },
    })
);

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});



app.listen(port, () => {

})