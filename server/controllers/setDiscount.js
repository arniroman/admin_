const mongoose = require('mongoose')
const Discount = require('../models/discount')
const Product = require('../models/product')
const CronJob = require('cron').CronJob

module.exports = {
   
    setDiscount: (req,res) => {
    const result = req.body.product
    console.log(result)    






    // for(let key in result.products) {
    //     let oldPrice = result.products[key].price
    //     let newPrice = oldPrice - oldPrice * result.discount / oldPrice
    //         result.products[key]['discountPrice'] = newPrice
    //         }
    //             const discountDb = new Discount(result)
    //                   discountDb.save()
    //                             .then( (doc) => {
    //                                 res.send({
    //                                     discountConfirm: true
    //                                 })   
    //                             })
    //                             .then((result)=>{
    //                                 Discount.find({})
    //                             .then((doc) => { 
    //                             doc.forEach(el => {
    //                             if(el.name == req.body.product.name){
    //                                 /** Created croneJob to remove outdated discounts **/
    //                             try {
    //                             new CronJob(new Date(req.body.product.data), () => {
    //                             console.log('You will see this when script work')
    //                             Discount.findByIdAndRemove(el._id)
    //                                     .then((doc) => {  
    //                                     })
    //                                     .catch(err => {
    //                                         res.status(400).send(err);
    //                                         console.log("we got an error")
    //                                     })
    //                                     }, null, true, 'America/Los_Angeles')
    //                                 }
    //                                     catch(ex) {
    //                                     console.log("cron pattern not valid");
    //                                 }
    //                                 }
    //                                 }) 
    //                                 }).catch(err => {
    //                                 res.status(400).send(err);
    //                                 console.log("we got an error");
    //                                 })
    //                                     })
    //                                     .catch((err) => {
    //                                         res.status(400).send(err);
    //                                         console.log("we got an error")
    //                                     })

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