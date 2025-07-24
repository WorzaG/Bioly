const express = require('express')
const router =  express.Router()
const jwtMiddleware = require('../middlewares/authMiddleware')
const { addLink,removeLink, getLinks, updateLink, clickUpdate } = require('../controllers/linkController')
const upload = require('../middlewares/uploadPicture')
const multer = require('multer')
const { uplaodProfilePicture } = require('../controllers/userController')

router.post('/add',jwtMiddleware,addLink)
router.get('/link',jwtMiddleware,getLinks)
router.delete('/delete',jwtMiddleware,removeLink)
router.put('/update',jwtMiddleware,updateLink)
router.put('/click',clickUpdate)
router.put('/upload-profile-picture',jwtMiddleware,upload.single("image"),uplaodProfilePicture)

module.exports = router