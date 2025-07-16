const express = require('express')
const router =  express.Router()
const { getProfileInfo, getMe } = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/authMiddleware')

router.get('/profile',getProfileInfo)
router.get('/me',jwtMiddleware,getMe)

module.exports = router