const router = require('express').Router()
const controllers = require('../../controllers/product')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Admin = require('../../models/admin')
const jwt = require('jsonwebtoken')
const config = require('../../config')

router.post('/signup',(req,res) => {
    Admin.find({
        email: req.body.email
    })
    .exec()
    .then((admin) => {
        if(admin.length >= 1) {
            return res.status(409).json({
                message: 'Mail exists'
            })
        }
        else{
            bcrypt.hash(req.body.password, 10, (err,hash) => {
                if(err){
                    return res.status(500).json({
                        error: err
                    })
                } else {
                    const admin = new Admin({
                    email     : req.body.email,
                    password  : hash
                })
                admin.save()
                     .then((result) => {
                         console.log(result)
                        res.status(201).json({
                            message: 'Admin created'
                        })
                     }).catch( err => {
                         console.log(err)
                         res.status(500).json({
                            error: err
                         })
                    })
                }
           })

        }
    })

})

router.post('/login',(req,res) => {
    console.log(req.body)
    console.log(req.body.password)
    Admin.find({email: req.body.email})
         .exec()
         .then()
         .then ((admin) => {
             if(admin.length < 1){
               return res.send({
                    message : 'Mail not found,'
                })
             }
             console.log(admin,'admin')
             bcrypt.compare(req.body.password, admin[0].password, (error,result) => {
                 if (error){
                    console.log(error)
                    res.send(error)
                 }
                 else if(result){
                    const token =  jwt.sign({
                         email: admin[0].email,
                         adminId: admin[0]._id
                     },config.JWT_KEY,
                     {
                         expiresIn: '1h'
                     })
                     res.send({
                        message: 'Auth successful',
                        token: token
                     })
                 }
             })
         })
         .catch((err) => {
           console.log(err)
           res.status(500).json({
           error: err
            })
        })
})


module.exports = router