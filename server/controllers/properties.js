const mongoose = require('mongoose')
const Properties = require('../models/properties')

module.exports = {
   
    newProperties: (properties,callback) => {
        const propertiesDb = new Properties(properties)
              propertiesDb.save((err,createProperties)=>{
                  console.log(`result${createProperties}`)
                  callback(properties)
              })
    },

    getAllProperties: (callback) => {
        Properties.find({},(err,properties)=>{
            callback(err,properties)
        })
    },

}