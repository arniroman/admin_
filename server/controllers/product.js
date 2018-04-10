const mongoose = require('mongoose')
const Product = require('../models/product')

module.exports = {

    newProduct: (req,res) => {
        console.log(req.body)
        const productDb = new Product(req.body)
        productDb.save()
                 .then((doc) => {
                        res.send(
                            {
                                message:'product successfully added!',
                                doc
                            }
                        )
                        })
                 .catch(err => {
                    res.status(400).send(err);
                    console.log("we got an error");
                  })  
    },

    getAllProduct: async (req,res) => {
        const perPage = 5
        const productData = req.params.id.split(',')
        const resultsPagination = productData[0]
        const page = resultsPagination || 0
        const skipFormula = perPage * page 
        let criteria = []
        
        criteria.push({
            name: {
              $regex: new RegExp(productData[1], "i")
            }
          })
    
        criteria = criteria.length > 0 ? { $and: criteria } : {}
        const currentAmount = await Product.find(criteria).count()
        
        if (currentAmount < skipFormula) {
             skipFormula = 0; 
          }

        Product.find(criteria)
               .skip(skipFormula)
               .limit(perPage)
               .exec((err,products) => {
                   if(err) return (err)
                      res.send({
                        product: products,
                        current: page,
                        pages  : Math.ceil(currentAmount/perPage),
                    })
               
            })
    },

    deleteProduct: (req,res) => {
        Product.findByIdAndRemove(req.params.id)
               .then((doc) => { 
                      res.send(doc)
                    })
               .catch(err => {
                      res.status(400).send(err);
                      console.log("we got an error");
                      })
    },

    updateProduct: (req,res) => {
        console.log(req.body)
        Product.findByIdAndUpdate(req.params.id,req.body)
               .then((doc) => {
                res.send({
                    message: 'product updated!',
                    doc
                })
                })
               .catch(err => {
               res.status(400).send(err)
               console.log("we got an error");
              })
                                                
    }

}