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

    getAllProduct: (callback)=>{
        Product.find({},(err,product) => {
            callback(err,product)
        })
    },

    deletProductById: (id,callback)=>{
        Product.findByIdAndRemove(id, (err,todo)=>{
           callback(err,todo)
       }) 
              
    }

}