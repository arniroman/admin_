const router = require('express').Router()
const controllers = require('../../controllers/product')
const mongoose = require('mongoose')
const Admin = require('../../models/admin')

router.post('/singup',(req,res) => {
    const admin = new Admin({
        email    : req.body.email,
        password : req.body.password
    })

})



module.exports = router