exports.get = (req, res) => {

    if (req.session.email && req.session.nome)
        res.redirect('/post');
    res.redirect('login');    
};