const express = require('express');
const bodyParser = require('body-parser');

const mysql = require('mysql');
const db = require('db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    const users = await db.query('SELECT * FROM user')
    res.jsonp(users)
});

app.post('/user', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    
    const sqlQuery = `INSERT INTO user(nome, email) VALUES('${nome}','${email}')`;

    try {
        const user = await db.query(sqlQuery);
        res.jsonp(user);
    }
    catch {
        res.status(500).jsonp(error);
    }

});

app.put('/user/:id', async (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const email = req.body.email;

    const sqlQuery = `UPDATE SET nome = '${nome}', email = '${email}' WHERE id = '${id}`;

    try {
        const user = await db.query(sqlQuery);
        res.jsonp(user);
    }
    catch {
        res.status(500).jsonp(error);
    }

});

app.listen(80);