const router = require('express').Router()
const controllers = require('../../controllers/product')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Admin = require('../../models/admin')

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
    Admin.find({email: req.body.email})
})


module.exports = router