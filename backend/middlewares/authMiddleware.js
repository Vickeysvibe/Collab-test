const jwt = require('jsonwebtoken');
const { publicKey } = require('../config/keys');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const tokenParts = authHeader.split(' ');

    if (tokenParts[0] !== 'Bearer' || !tokenParts[1]) {
        return res.status(400).json({ message: 'Invalid authorization header format. Expected "Bearer <token>".' });
    }

    const token = tokenParts[1];

    try {
        const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = authMiddleware;
