const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productDiscountSchema = mongoose.Schema({
    name        : String,
    data        : Date,
    product     : [{ 
                    productId: String,
                    discount: Number
                    }]
})

const Discount = mongoose.model('Discount', productDiscountSchema)

module.exports = Discount