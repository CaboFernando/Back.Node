const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    try {
        const users = await db.query('SELECT * from user');
        res.jsonp(users);
    }
    catch (error) {
        res.status(500).jsonp(error);
    }
});

app.post('/user', async (req, res) => {

    const nome = req.body.nome;
    const email = req.body.email;

    const sqlQuery = `
        INSERT INTO user(nome, email) 
        VALUES ('${nome}','${email}')`;

    try {
        const user = await db.query(sqlQuery);
        res.jsonp(user);
    }
    catch (error) {
        res.status(500).jsonp(error);
    }

});

app.put('/user/:id', async (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const email = req.body.email;

    const sqlQuery = `
        UPDATE user 
            set 
                nome = '${nome}', 
                email = '${email}'
            WHERE 
                id = ${id}
    `;

    try {
        const user = await db.query(sqlQuery);
        res.jsonp(user);
    }
    catch (error) {
        res.status(500).jsonp(error);
    }

});

app.listen(80);



