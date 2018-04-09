const mongoose = require('mongoose')
const Discount = require('../models/discount')
const Product = require('../models/product')


module.exports = {
   
    setDiscount: async (req,res) => {
    const result = req.body.product
    console.log(result.product[0])
    const  checkingTheUniqueness = await Discount.find(
          { product: {$elemMatch: {productId: result.product[0].productId}}}
    )
    
    if( checkingTheUniqueness.length >= 1) {
        console.log('exists')
        return res.status(409).json({
                message: 'discount exists!'
        })
        
    } else {
    const discountDb = new Discount(result)
          discountDb.save()
                    .then( (docDiscount) => {
                    docDiscount.product.forEach(el => {
                    Product.find({})
                           .then(product => {
                            product.forEach(prod => {
                            let discount = prod.originalPrice / 100 * el.discount,
                                discountPrice = prod.originalPrice - discount 
                             if(prod._id == el.productId){
                             Product.findByIdAndUpdate(prod._id, {price: discountPrice})
                                    .then(doc => console.log(doc,'updated'))
                             }})
                            })
                        })
                    })
                }
                },

    getDiscount: (req,res) => {
        Discount.find({})
                .then(doc => {
                    res.send(doc)
                })
                .catch(err => {
                    res.status(400).send(err)
                    console.log('we got an error')
                }) 
        }
    }