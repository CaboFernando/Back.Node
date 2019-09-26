const md5 = require('../helpers/md5');
const POST_DATA = require('../models/postModel');
const dateFns = require('date-fns');

exports.get = (req, res) => {

    const user = {
        ...req.session,
        imgMD5: md5(req.session.email)
    };

    const posts = POST_DATA.map(
        (post) => {
            const data = dateFns.format(new Date(post.data), 'dd/mm/yyyy hh:mm');
            return {
                ...post,
                img: md5(post.email),
                data: data
            }
        }
    );

    const postCriado = req.query.criado ? true : false;

    res.render('postView.ejs', {
        user: user,
        post: posts,
        criado: postCriado
    });
};

exports.post = (req, res) => {
    const newPost = {
        nome: req.session.nome,
        email: req.session.email,
        texto: req.body.texto,
        data: Date.now()
    };

    POST_DATA.unshift(newPost);

    res.status(201)
       .redirect('/post?criado=ok');

    // req.session.nome = req.body.nome;
    // req.session.email = req.body.email;
    // res.status(200).redirect('/post');
};