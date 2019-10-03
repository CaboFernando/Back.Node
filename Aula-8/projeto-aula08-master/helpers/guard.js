module.exports = (req, res, next) => {
    if(!req.session.email || !req.session.nome) {
        res.redirect('/login');
    } 
    next();
};