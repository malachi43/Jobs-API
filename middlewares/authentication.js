const {UnauthenticatedError} = require('./../errors/')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const authenticateUser = (req,res,next)=>{
    //checking authorization header
    const authHeader= req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith(`Bearer`)){
       throw new UnauthenticatedError('Authentication invalid')
    }
    
    try {
        const token = authHeader.split(' ')[1]
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {userId: payload.userId, name: payload.name}
        next()
    } catch (error) {
      throw new UnauthenticatedError('Authentication invalid')
    }
    
}

module.exports = authenticateUser