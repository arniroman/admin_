
const Discount = require('../models/discount')
const Product = require('../models/product')
const cron = require('node-cron')


findDiscount = async () => {
    let products,
        discounts
    try{
      products  = await Product.find({})
      discounts = await Discount.find({})  
    } catch(e) {
        res.status(400).send(err)
        console.log('we got an error')
    } 
    

       discounts.filter(it => it.active === true && it.data < new Date())
                .forEach(disc => {
                    Discount.findByIdAndUpdate(disc._id,{active: false})
                                .then((doc) => {
                                    console.log(doc,'cancel a discount!')  
                            })
                                .catch(err => {
                                res.status(400).send(err)
                                    console.log("we got an error")
                            })

                    disc.product.forEach(discProduct => {
                    products.filter(it => it._id == discProduct.productId)
                            .forEach(product => {
                    
                        Product.findByIdAndUpdate(product._id,{price: product.originalPrice})
                               .then(doc => {
                                    console.log(doc,'updated product price!')
                            })
                               .catch(err => {
                               res.status(400).send(err)
                                    console.log("we got an error")
                            })            
                        })
                    })    
                })
            }


var startCron = new Promise(()=> {
    cron.schedule('*/10 * * * * *',findDiscount )
})

module.exports = startCron