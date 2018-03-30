const router = require('express').Router()
const controllers = require('../../controllers/product')
const mongoose = require('mongoose')
const Product = require('../../models/product')

router.get('/:id',(req,res) => {
      let id = req.params.id
    console.log(id)
    //   mongoose.connection.db.collection('carts', function (err, collection) {
    //     collection.find({
    //         userID:id
    //      }).toArray(function(err, data){
    //         console.log(data)
    //      })     
    // })
    Product.find({_id:id}).then((data)=>{
        res.send(data)
        console.log(data)
    })

})



module.exports = router