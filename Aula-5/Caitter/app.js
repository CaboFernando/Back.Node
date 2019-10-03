const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(session({secret: 'abc123##', saveUninitialized: true, resave: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const indexRouter = require('./routers/indexRouter');
const loginRouter = require('./routers/loginRouter');
const postRouter = require('./routers/postRouter');

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/post', postRouter);


app.listen(3000);

