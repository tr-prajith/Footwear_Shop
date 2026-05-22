const jwt = require('jsonwebtoken')
const AuthMiddleware = async (req, res, next) => {
    try{
        const token = req.cookies.token
        // console.log(token);
        
        if(!token){
            return res.status(401).json({msg:"Not Authenticated"})
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decodedToken
        next()
    }catch(error){
        return res.status(401).json({msg:"Invalid Token"})
    }

}

module.exports = AuthMiddleware

