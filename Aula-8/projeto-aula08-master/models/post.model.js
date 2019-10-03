const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    texto: {
        type: String,
        required: true,
        max: 140
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Post', PostSchema);