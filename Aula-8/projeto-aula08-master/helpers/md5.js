const crypto = require('crypto');
module.exports = (myString) => {
    console.log(myString)
    return crypto.createHash('md5').update(myString).digest("hex");
}
