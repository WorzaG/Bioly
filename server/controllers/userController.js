const { addUser, findUserByEmail, findUserByID, findProfile, findUserByUsername, uploadPicture } = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const userRegister = async (req,res) => {

    const { username, email, password } = req.body

    try{
        const emailValidation = await findUserByEmail(email)
        const usernameValidation = await findUserByUsername(username)
        if(emailValidation){ 
          return res.status(400).json({message:'Bu email zaten kullanılıyor'})
        }
        if(usernameValidation){
          return res.status(400).json({message:'Bu kullanıcı adı zaten kullanılıyor'})
        }

        const hashedPassword = await bcrypt.hash(password,15)
        const newUser = await addUser(username,email,hashedPassword)
        res.status(201).json(newUser)
    }catch(error){
        res.status(500).json({message:'sunucu hatası',error:error})
    } 

}

const userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
      }
  
      const user = await findUserByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      return res.status(200).json({ message: 'Başarılı', token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
const getProfileInfo = async (req,res) => {
    const { username } = req.query
    try{
        const profile = await findProfile(username)
        res.status(200).json({profile})
    }catch(err){
        res.status(500).json({message:'sunucu hatası',err})
    }
    
}

const getMe = async (req,res) => {
  const userId = req.user.userId
  try {
    const me = await findUserByID(userId)
    res.status(200).json({me})
  } catch (error) {
    res.status(500).json({message:'sunucu hatası',error})
  }

}


const uplaodProfilePicture = async (req,res) => {
  const userId = req.user.userId
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    const upload = await uploadPicture(userId,imageUrl)
    res.status(200).send({ success: true, imageUrl });

  } catch (error) {
    res.status(500).json({message:'sunucu hatası',error})

  }
}


module.exports = {
    userRegister,
    userLogin,
    getProfileInfo,
    getMe,
    uplaodProfilePicture
}