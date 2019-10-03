const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number
}, {
    collection: 'user'
});