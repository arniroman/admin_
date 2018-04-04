const router = require('express').Router()
const controllers = require('../../controllers/auth')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Admin = require('../../models/admin')
const jwt = require('jsonwebtoken')
const config = require('../../config')

router.post('/signup',(req,res) => {
    controllers.singup(req,res)
})

router.post('/login',(req,res) => {
    controllers.login(req,res)
})


module.exports = router