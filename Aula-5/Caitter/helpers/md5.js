const crypto = require('crypto');

module.exports = (myString) => {
    return crypto.createHash('md5')
                 .update(myString)
                 .digest('hex');
};