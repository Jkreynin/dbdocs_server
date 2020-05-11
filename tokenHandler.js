const jwt = require('jsonwebtoken');
const config = require('./appConf')

const create = (userData) => {
    let tokenObject = { "user": userData };
    let token = jwt.sign(tokenObject,
        config.secret,
        { expiresIn: "90d" });

    return token;
}

const decode = (token) => {
    try {
        return jwt.verify(token, config.secret);
    }
    catch (err) {
        return null;
    }
}

module.exports = {
    create,
    decode,
}
