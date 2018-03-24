const mongoose = require('mongoose')
const Product = require('../models/product')

module.exports = {
    exportToCsv: (req,res)=>{
        const filename   = "products.csv";
        Product.find({})
               .lean()
               .exec({})
               .then((products)=>{
                      res.setHeader('Content-Type', 'text/csv')
		              res.setHeader("Content-Disposition", 'attachment; filename='+filename)
                      res.csv(products, true)
               },(err)=>{
                  res.send(err)
		          res.statusCode = 20
            })
       }
}