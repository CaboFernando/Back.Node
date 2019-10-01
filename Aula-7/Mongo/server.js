const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
	
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://luis:Luis1234@cluster0-shard-00-00-4tgeh.mongodb.net:27017,cluster0-shard-00-01-4tgeh.mongodb.net:27017,cluster0-shard-00-02-4tgeh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');
const userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number
}, { collection: 'user' }
);

app.get('/', (req, res) => {
    const User = mongoose.model('user', userSchema, 'user');
    User.find({nome: 'Luis'}).lean().exec(function(e,users){
        res.json(users);
        res.end();
    });
});

app.post('/user', function (req, res, next) {
    const User = mongoose.model('user', userSchema, 'user');

    const newUser = new User({
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
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