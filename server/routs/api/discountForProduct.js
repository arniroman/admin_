const router = require('express').Router()
const controllers = require('../../controllers/product')
const Discount = require('../../models/discount')
const Product = require('../../models/product')
const CronJob = require('cron').CronJob

router.post('/',(req,res) => {
    
    const result = req.body.product
    for(let key in result.products) {
        let oldPrice = result.products[key].price
        let newPrice = oldPrice - oldPrice * result.discount / oldPrice
            result.products[key]['discountPrice'] = newPrice
            }
                const discountDb = new Discount(result)
                      discountDb.save()
                                .then( (doc) => {
                                    res.send({
                                        discountConfirm: true
                                    })   
                                })
                                .catch((err) => {
                                    res.status(400).send(err);
                                    console.log("we got an error")
                                })

                setTimeout( () => {
                        Discount.find({})
                                .then((doc) => { 
                        doc.forEach(el => {
                        if(el.name == req.body.product.name){
                            /** Create croneJob to remove outdated discounts **/
                        new CronJob(new Date(req.body.product.data), () => {
                        console.log('You will see this when script work')
                        Discount.findByIdAndRemove(el._id)
                                .then((doc) => {  
                                })
                                .catch(err => {
                                    res.status(400).send(err);
                                    console.log("we got an error")
                                })
                                }, null, true, 'America/Los_Angeles')

                                 }
                              }) 
                              }).catch(err => {
                             res.status(400).send(err);
                            console.log("we got an error");
                            })
                    },7000)

//   Product.findByIdAndUpdate(products[key]._id,{salePrice:newPrice})
//                         .then((doc) => {
//                                res.send(doc)
//                              })
//                         .catch(err => {
//                            res.status(400).send(err);
//                            console.log("we got an error");
//                          })
    
})

module.exports = router