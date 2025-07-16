const { add, remove, getLink, update, count } = require('../models/linkModel')

const addLink = async (req,res) => {
    try{
        const user_id = req.user.userId
        const { title, link } = req.body
        const newLink = await add(user_id,link,title)
        res.status(201).json({message:'başarı ile eklendi',newLink})
    }catch(error){
        res.status(500).json({message:'sunucu hatası',error:error})
    }
}

const removeLink = async(req,res) => {
    try {
        const { id } = req.query
        console.log(id);
        const deleteLink = await remove(id)
        res.status(200).json({message:'başarılı bir şekilde silindi',deleteLink,id})
    } catch (error) {
        res.status(500).json({message:'sunucu hatası',error:error})
    }
}

const getLinks = async(req,res) => {
    try {
        const userId = req.user.userId
        const data = await getLink(userId)
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message:'sunucu hatası',error:error})
    }
}

const updateLink = async(req,res) => {
    try {
        const { id, title, link } = req.body
        const data = await update(id,title,link)
        res.status(200).json({message:'başarılı bir şekilde güncellendi', data}) 
    } catch (error) {
        res.status(500).json({message:'sunucu hatası',error:error})
    }
}

const clickUpdate = async (req,res) => {
    try {
        const { id } = req.body
       // console.log(id);
        const data = await count(id)
        res.status(200).json({message:'başarılı bir şekilde güncellendi', data}) 
    } catch (error) {
        res.status(500).json({message:'sunucu hatası',error:error})
    }
}

module.exports = {
    addLink,
    removeLink,
    getLinks,
    updateLink,
    clickUpdate
}
