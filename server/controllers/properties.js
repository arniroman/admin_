const mongoose = require('mongoose')
const Properties = require('../models/properties')

module.exports = {
   
    newProperties: (req,res) => {
        console.log(req.body)
        const propertiesDb = new Properties(req.body)
            propertiesDb.save()
                        .then((doc) => {
                            res.send({
                                message:'properties successfully added!',
                                doc
                                })
                            })
                          .catch(err => {
                            res.send({
                                message:'uncorrect data!',
                                err
                            })
                            res.status(409)
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