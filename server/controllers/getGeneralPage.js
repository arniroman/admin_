const mongoose = require('mongoose')
const Discount = require('../models/discount')
const Product = require('../models/product')
const CronJob = require('cron').CronJob

module.exports = {
    deleteOldDataDiscount: (req,res) => {
        let currentDate = new Date()
        Discount.find({})
                .then(doc => {
                    doc.forEach(el => {
                        if (new Date (el.data) < currentDate ){
                            console.log(el.data)
                            try {
                                Discount.findByIdAndRemove(el._id)
                                        .then((doc) => {
                                            res.send(doc)
                                            console.log(`this document is oldest${doc}`)
                                        })
                                        .catch(err => {
                                            res.status(400).send(err);
                                            console.log("we got an error")
                                        })
                                    }
                                        catch(ex) {
                                        console.log("cron pattern not valid");
                                    }
                        }
                    })

                })

    }

}