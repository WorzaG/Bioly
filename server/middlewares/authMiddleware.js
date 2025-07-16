const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if(!authHeader) res.status(401).json({message:'yetkisiz durum'})

  const token = authHeader.split(" ")[1]
  if(!token) res.status(401).json({message:'yetkisiz durum'})

  try{

    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user = decoded
    next()
  }catch(err){
    return res.status(401).json({ message: "Token geçersiz" });
  }


};

module.exports = authMiddleware;