const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name    : String,
    descr   : String,
    price   : Number,
    weight  : Number,
    active  : Boolean,
    category: String,
    tags    : Array,
    prop    : Array,
    images  : Array,       
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;