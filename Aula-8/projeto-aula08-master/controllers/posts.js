// Controllers posts.js
const md5 = require('../helpers/md5');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Post = mongoose.model('Post');

exports.get = async (req, res) => {
    const user = {
        ...req.session,
        imgMD5: md5(req.session.email)
    };

    const posts = await Post.find({}).populate('user');
    
    res.render('posts.ejs', {
        user: user,
        posts: posts
    });    
};

exports.novo = async (req, res) => {
    try { 
        const { email } = req.session;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send("<h1>Usuario não encontrado</h1>");
        }
        
        const post = new Post({
            user  : user._id,
            email : email,
            texto : req.body.text,
        });

        Post.create(post); // ou post.save();

        res.status(200).redirect('/posts');

    } catch (err) {
        return res.status(400).send("Erro ao criar post").end();
    }
};
