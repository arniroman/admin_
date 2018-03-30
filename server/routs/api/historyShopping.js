const router = require('express').Router()
const controllers = require('../../controllers/product')
//const Product = require('../../models/product')
const mongoose = require('mongoose')

router.get('/',(req,res)=>{
 
//    function findCollection(name,query){
//         return new Promise((resolve,reject) => {
//             mongoose.connection.db.collection(name, function (err, collection) {
//                 collection.find(query).toArray(function(err, data){
//                    // dataHistory = data
//                     resolve(data)
//                 })     
//         })
//     })
// }
//     findCollection('carts',{}).then((data) => {
//         res.send(data)
//     })

    mongoose.connection.db.collection('carts', function (err, collection) {
        collection.find({}).toArray(function(err, data){
           res.send(data)
        })     
})
})



module.exports = router