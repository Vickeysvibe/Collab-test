const jwt = require('jsonwebtoken');
const { privateKey } = require('../config/keys');

const generateToken = (user) => {
    const payload = {
        id: user._id,
        username: user.username,
    };

    const options = {
        algorithm: 'RS256',
        expiresIn: '1h',
    };

    return jwt.sign(payload, privateKey, options);
};

module.exports = generateToken;
