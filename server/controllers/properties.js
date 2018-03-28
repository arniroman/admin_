const mongoose = require('mongoose')
const Properties = require('../models/properties')

module.exports = {
   
    newProperties: (properties,callback) => {
        const propertiesDb = new Properties(properties)
              propertiesDb.save()
                          .then((doc) => {
                                 res.send(doc)
                              })
                          .catch(err => {
                            res.status(400).send(err);
                            console.log("we got an error");
                          })
    },

    getAllProperties: (req,res) => {
            Properties.find({})
                      .then((doc) => {
                             res.send(doc)
                          })
                      .catch(err => {
                        res.status(400).send(err);
                        console.log("we got an error");
                      })
    }

}