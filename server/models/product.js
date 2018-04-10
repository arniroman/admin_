const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = mongoose.Schema({
    name          : { type: String , required: true },
    descr         : { type: String , required: true },
    originalPrice : { type: Number , required: true },
    price         : { type: Number , required: true },
    weight        : { type: Number , required: true },
    active        : { type: Boolean, required: true },
    available     : { type: Boolean, required: true },
    category      : { type: String , required: true },
    tags          : { type: Array  , required: true },
    props         : { type: Object , required: true },
    images        : { type: String , required: true },       
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product