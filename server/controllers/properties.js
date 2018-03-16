const mongoose = require('mongoose')
const Properties = require('../models/properties')

module.exports = {
   
    newProperties: (properties,callback) => {
        const propertiesDb = new Properties(properties)
              propertiesDb.save()
                          .then((doc) => {
                                 res.send(doc)
                              },(err) => {
                                 console.log(err)
                                 resizeBy.send(500)
                          })
    },

    getAllProperties: (req,res) => {
            Properties.find({})
                    .then((doc) => {
                            res.send(doc)
                        },(err) => {
                            console.log(err)
                            res.send(500)
                    })
    }

}