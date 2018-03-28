const router = require('express').Router()
const controllers = require('../../controllers/product')
const mongoose = require('mongoose')

router.get('/',(req,res)=>{
 
   function findCollection(name,query){
        return new Promise((resolve,reject) => {
            mongoose.connection.db.collection(name, function (err, collection) {
                collection.find(query).toArray(function(err, data){
                    resolve(data)
                })     
        })
    })
}
    findCollection('userups',{}).then((data) => {
        res.send(data)
    })


})



module.exports = router