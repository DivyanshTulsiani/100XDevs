const jwt = require('jsonwebtoken')
const JWT_PASSWORD = process.env.JWT_SECRET


async function userMiddleware(req,res,next) {
  const token = req.headers.token

  const decoded = jwt.verify(token,JWT_PASSWORD)

  if(decoded){
    req.userId = decoded.id
    next()
  }
  else{
    res.json("User does not exist. You are not signed in")
  }
  
}

module.exports = {
  userMiddleware: userMiddleware
}   