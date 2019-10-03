const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = (req, res) => {
    res.render('login.ejs');
};

exports.sair = (req, res) => {
    req.session.destroy();
    res.redirect('/login').end();
};

exports.autenticar = async (req, res) => {
    try {

        const {
            email
        } = req.body;

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(400).send("<h1>Usuário não cadastrado</h1>");
        }

        req.session.nome = user.nome;
        req.session.email = user.email;
        req.session.avatar = user.avatar;

        res.status(200).redirect('/posts');

    } catch (err) {
        return res.status(400).send("Erro na autenticação").end();
    }

};

exports.cadastroGet = (req, res) => {
    res.render('cadastro.ejs');
};

exports.cadastroPost = async (req, res) => {
    try {

        const {
            email,
            nome
        } = req.body;

        if (await User.findOne({
                email
            })) {
            return res.status(400).send('<h1>Usuário já existe</h1>');
        }
        const user = await User.create(req.body);
        res.status(200).redirect('/login');

    } catch (err) {
        return res.status(400).send("Erro no cadastro").end();
    }

};