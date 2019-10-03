exports.get = (req, res) => {
    res.render('loginView.ejs');
};

exports.post = (req, res) => {
    req.session.nome = req.body.nome;
    req.session.email = req.body.email;
    res.status(200).redirect('/post');
};