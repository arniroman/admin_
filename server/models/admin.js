const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminSchema = mongoose.Schema({
    email     : String,
    password  : String,
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin