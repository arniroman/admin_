const router = require('express').Router()
const controllers = require('../../controllers/product')
const Discount = require('../../models/discount')
const Product = require('../../models/product')

router.post('/',(req,res) => {
    const result = req.body.product
    for(let key in result.products) {
        let oldPrice = result.products[key].price
        let newPrice = oldPrice - oldPrice * result.discount / oldPrice
            result.products[key]['discountPrice'] = newPrice
            }
                const discountDb = new Discount(result)
                discountDb.save()
                         .then((doc) => {   
                        })
                         .catch(err => {
                            res.status(400).send(err);
                            console.log("we got an error")
                          })

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