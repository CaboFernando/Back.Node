const crypto = require('crypto');

exports.get = (req, res) => {
    const user = {
        ...req.session,
        imgMD5: crypto.createHash('md5').update(req.session.email).digest("hex")
    };
    res.render('post.ejs', {        
        user: user
    });
};

exports.post = (req, res) => {
    req.session.nome = req.body.nome;
    req.session.email = req.body.email;
    res.status(200).redirect('/post');
};