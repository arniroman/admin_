
const Discount = require('../models/discount')
const Product = require('../models/product')
const cron = require('node-cron')


findDiscount = async () => {
    
   let products  = await Product.find({})
   let discounts = await Discount.find({})

       discounts.forEach(disc => {
       disc.product.forEach(discProduct => {
       products.forEach(product => {
                       if(disc.active === true){
                       if(disc.data < new Date()){
                       if(product._id == discProduct.productId){
                       
                        Product.findByIdAndUpdate(product._id,{price: product.originalPrice})
                               .then(doc => {
                                    console.log(doc,'updated product price!')
                            })
                               .catch(err => {
                               res.status(400).send(err)
                                    console.log("we got an error")
                            })
                        Discount.findByIdAndUpdate(disc._id,{active: false})
                                .then((doc) => {
                                    console.log(doc,'cancel a discount!')  
                            })
                                .catch(err => {
                                res.status(400).send(err)
                                    console.log("we got an error")
                            })
                        }
                    }
                }       
            })
        })    
    })
}


var startCron = new Promise(()=> {
    cron.schedule('*/10 * * * * *',findDiscount )
})

module.exports = startCron