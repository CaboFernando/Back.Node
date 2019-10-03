const mongoose = require("mongoose");
const md5 = require("../helpers/md5");

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    senha: {
        type: String
    }
});

UserSchema.virtual('avatar').get(function () {
    return md5(this.email);
});

mongoose.model("User", UserSchema);