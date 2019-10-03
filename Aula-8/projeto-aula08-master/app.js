const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongo = require('./db/mongo');

const app = express();

app.use(session({secret: 'luis@123', saveUninitialized: true, resave: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const postsRouter = require('./routes/posts');

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/posts', postsRouter);

const porta = process.env.PORT || 3000;

app.listen(porta);
