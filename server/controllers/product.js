const mongoose = require('mongoose')
const Product = require('../models/product')

module.exports = {

    newProduct: (product,callback) => {
        const productDb = new Product(product)
        productDb.save((err,createProduct) => {
            console.log(`result: ${createProduct}`)
            callback(err,createProduct)
        })
    },

   /* getAllProduct: (callback)=>{
        Product.find({},(err,product) => {
            callback(err,product)
        })
    },*/

    deleteProduct: (productId,callback)=> {
        Product.findByIdAndRemove(productId,(err,todo)=>{
            callback(err,todo)
        })
    },

    updateProduct: (productId,name,descr,price,weight,active,category,props,images,callback)=> {
        Product.findByIdAndUpdate(productId,{name:name,
                                             descr:descr,
                                             price:price,
                                             weight:weight,
                                             active:active,
                                             category:category,
                                             props:props,
                                             images:images},
                                             (err,todo)=>{
            callback(err,todo)
        })
    }

}