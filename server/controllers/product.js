const mongoose = require('mongoose')
const Product = require('../models/product')

module.exports = {

    newProduct: (product,req,res) => {
        const productDb = new Product(product)
        productDb.save()
                 .then((doc) => {
                        res.send(doc)
                        },(err) => {
                        console.log(err)
                        res.send(500)
                })      
    },

    getAllProduct: (req,res)=>{
        const perPage = 5
        const page = req.params.id || 1
        Product.find({})
               .skip((perPage * page) - page)
               .limit(perPage)
               .exec((err,products) => {
                    Product.count().exec((err,count) => {
                      if(err) return next(err)
                      res.send({
                        product: products,
                        current: page,
                        pages  : Math.ceil(count/perPage),
                        perPage: perPage
                    })
                })
            })
    },

    deleteProduct: (productId,req,res) => {
        Product.findByIdAndRemove(productId)
               .then((doc) => { 
                   console.log(doc,'dooc')
                      res.send(doc)
                    },(err) => {
                       console.log(err)
                       res.send(500)
                    })
    },

    updateProduct: (productId,req,res,name,descr,price,weight,active,category,props,images) => {
        Product.findByIdAndUpdate(productId,{name    :name,
                                             descr   :descr,
                                             price   :price,
                                             weight  :weight,
                                             active  :active,
                                             category:category,
                                             props   :props,
                                             images  :images})

                                             .then((doc) => {
                                                    res.send(doc)
                                                  },(err) => {
                                                     console.log(err)
                                                     res.send(500)
                                             })
                                                
    }

}