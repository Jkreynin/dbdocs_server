const jwt = require('jsonwebtoken');

const create = (userData) => {
    let tokenObject = { "user": userData };
    let token = jwt.sign(tokenObject,
        "dontfeardbdocsishere",
        { expiresIn: "90d" });

    return token;
}

const decode = (token) => {
    try {
        return jwt.verify(token, "dontfeardbdocsishere");
    }
    catch (err) {
        return null;
    }
}

module.exports = {
    create,
    decode,
}
