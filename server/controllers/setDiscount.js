const mongoose = require('mongoose')
const Discount = require('../models/discount')
const Product = require('../models/product')
const CronJob = require('cron').CronJob

module.exports = {
   
    setDiscount: (req,res) => {
    const result = req.body.product

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
                            /** Created croneJob to remove outdated discounts **/
                            new CronJob(new Date(docDiscount.data), () => {
                            console.log('You will see this when script work')
                            Product.findByIdAndUpdate(prod._id,{price: prod.originalPrice})
                                   .then(doc => {
                                       console.log(doc,'updated')
                                   })
                                   .catch(err => {
                                    res.status(400).send(err)
                                    console.log("we got an error")
                                    })
                            Discount.findByIdAndRemove(docDiscount._id)
                                    .then((doc) => {
                                console.log(doc,'deleted')  
                            })
                                    .catch(err => {
                                    res.status(400).send(err)
                                    console.log("we got an error")
                            })
                            }, null, true, 'America/Los_Angeles')                  
                        } 
                    }) 
                }).catch(err => {
                res.status(400).send(err)
                console.log("we got an error")  
            })
        })
        }).catch(err => {
            res.status(400).send(err)
            console.log("we got an error")
        })
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