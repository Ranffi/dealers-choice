const router = require("express").Router()
const {Category, Source} = require('../db')
//import models from /db

//routes go here

router.get('/categories', async(req, res, next) => {
    try{
        const categories = await Category.findAll()
        res.send(categories)
    }
    catch(err) {
        next(err)
    }
})

router.get('/categories/:id', async(req,res,next) => {
    console.log('hello')
    try{
        const category = await Category.findByPk(req.params.id, {
            include : [Source]
        })
        res.send(category)
        }
    catch(ex){
        next(ex)
    }
})

module.exports = router
