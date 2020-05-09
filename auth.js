const tokenHandler = require('./tokenHandler')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    tokenHandler.decode(token);
    next();
  } catch(err) {
    res.status(401).send('Unauthorized')
  }
};