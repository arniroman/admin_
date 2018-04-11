const mongoose = require('mongoose')
const Discount = require('../models/discount')
const Product = require('../models/product')


module.exports = {
   
    setDiscount: async (req,res) => {
    const result = req.body.product
    const  checkingTheUniqueness = await Discount.find(
          {active:true, product: {$elemMatch: {productId: result.product[0].productId}}}
    )
    console.log(checkingTheUniqueness,'test')
    if( checkingTheUniqueness.length >= 1) {
        console.log('exists')
        res.send({
            message: 'discount exists!'
        })  
    } else {
    let productList = await Product.find({})
    
    const discountDb = new Discount(result)
          discountDb.save()
                    .then(docDiscount => {
                    docDiscount.product.forEach(el => {
                       applyDiscount(el,productList)
                    })
                    res.send({
                        message:'discount created'
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
    
/** function for set discount **/
    function applyDiscount(el, list){
        list.forEach(prod => {
          if(prod._id == el.productId){           
          Product.findByIdAndUpdate(prod._id, {price: setDiscountPrice(prod,el)})
                 .then(doc => console.log(doc,'updated'))
            }
        })
    }

    function setDiscountPrice(prod,el){
        let discount = prod.originalPrice / 100 * el.discount,
             discountPrice = prod.originalPrice - discount
             return discountPrice
    }