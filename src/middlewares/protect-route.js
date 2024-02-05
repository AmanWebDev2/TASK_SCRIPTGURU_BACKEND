const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config');

const protect=(req,res,next)=>{
    const bearer = req.headers.authorization;
    if(!bearer) {
        return res.status(401).json({
            message: 'not authorized'
        })
    }

    const [,token] = bearer.split(' ');

    if(!token) {
        return res.status(401).json({
            message: 'not authorized'
        })
    }

    try {
        const user = jwt.verify(token,JWT_KEY);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'not a valid token'
        })
    }
}

module.exports = protect;