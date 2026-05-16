const jwt = require('jsonwebtoken')
const userMiddleware = async (req, res, next) => {
    // const header = req.header('Authorization')
    // console.log(header);
    // if (!header) {
    //     return res.status(401).json({ msg: "No Token, Authorization Denied" })
    // }
    // try {
    //     const token = header.split(" ")[1] 
    //     const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    //     req.user = decodedToken
    //     next()
    // } catch (error) {
    //     return res.status(401).json({ msg: "Invalid Token" })
    // }

    try{
        const token = req.cookies.token
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

module.exports = userMiddleware

