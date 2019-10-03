exports.get = (req, res) => {
    if(req.session.email && req.session.nome) {
        res.redirect('/posts');
    } else {
        res.redirect('/login');
    }
};