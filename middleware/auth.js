const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {

    // Get token from header
    const token = req.header('x-auth-token');

    // check if not a token
    if(!token) {
        return res.status(401).json({ msg: "No Token Detected, Access Denied"});
    }

    // Verify the token 
    try {
        const decode = jwt.verify(token, config.get('jwtSecret'));

        req.admin = decode.admin;
    } catch (err) {
        res.status(401).json({ msg: 'Invalid Token' });
    }
}