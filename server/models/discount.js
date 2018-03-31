const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productDiscountSchema = mongoose.Schema({
    name        : String,
    data        : Date,
    discount    : Number,
    products    : Object,       
})

const Discount = mongoose.model('Discount', productDiscountSchema)

module.exports = Discount