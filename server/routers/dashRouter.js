const express = require('express')
const router =  express.Router()
const jwtMiddleware = require('../middlewares/authMiddleware')
const { addLink,removeLink, getLinks, updateLink, clickUpdate } = require('../controllers/linkController')

router.post('/add',jwtMiddleware,addLink)
router.get('/link',jwtMiddleware,getLinks)
router.delete('/delete',jwtMiddleware,removeLink)
router.put('/update',jwtMiddleware,updateLink)
router.put('/click',clickUpdate)

module.exports = router