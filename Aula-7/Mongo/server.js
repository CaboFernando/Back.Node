const express = require('express');
const bodyParser = require('body-parser');

const db = require('./mongo');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const User = db.Mongo.model('user', db.UserSchema, 'user');
    User.find({}).lean().exec((e, users) => {
        res.json(users);
        res.end();
    })
});

app.get('/:idade', (req, res) => {
    const User = db.Mongo.model('user', db.UserSchema, 'user');
    User.find({ idade: { $eq: req.params.idade } }).lean().exec((e, users) => {
        res.json(users);
        res.end();
    })
});

app.post('/user', function (req, res, next) {
    const User = db.Mongo.model('user', db.UserSchema, 'user');

    const newUser = new User({
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade
    });

    newUser.save(
        (error) => {
            if (error) {
                res.status(500).jsonp(error);
                res.end();
                return;
            }

            res.status(201).jsonp(newUser);
        }
    );

});

app.listen(3001);