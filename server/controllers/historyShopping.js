const mongoose = require('mongoose')


module.exports = {

findCollection: (req,res) =>{

   function findCollection(name,query){
        return new Promise((resolve,reject) => {
            mongoose.connection.db.collection(name, function (err, collection) {
                collection.find(query).toArray(function(err, data){
                    resolve(data)
                })     
        })
    })
}
    findCollection('carts',{}).then((data) => {
        res.send(data)
    })
  }
}