const mongoose = require('mongoose');

mongoose.connect('mongodb://luis:Luis1234@cluster0-shard-00-00-4tgeh.mongodb.net:27017,cluster0-shard-00-01-4tgeh.mongodb.net:27017,cluster0-shard-00-02-4tgeh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');

const userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number
}, { collection: 'user' }
);

module.exports = {
    Mongo: mongoose,
    userSchema: userSchema
};