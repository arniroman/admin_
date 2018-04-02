const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = mongoose.Schema({
    name          : String,
    descr         : String,
    originalPrice : Number,
    price         : Number,
    weight        : Number,
    active        : Boolean,
    available     : Boolean,
    category      : String,
    tags          : Array,
    props         : Object,
    images        : String,       
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product