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
        let productData = req.params.id.split(',')
        let resultsPagination = productData[0]
        const page = resultsPagination || 0

        Product.find({
            name: {
                $regex: new RegExp(productData[1],"i")
              }
        })
               .skip((perPage * page) - page)
               .limit(perPage)
               .exec((err,products) => {
                    Product.count().exec((err,count) => {
                      if(err) return next(err)
                      res.send({
                        product: products,
                        current: page,
                        pages  : Math.ceil(count/perPage),
                        count  : count
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