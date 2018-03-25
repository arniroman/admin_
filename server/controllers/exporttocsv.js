const mongoose = require('mongoose')
const Product = require('../models/product')
var csv = require('csv-express');
var jsonexport = require('jsonexport')
var json2csv = require('json2csv').parse
const fs = require('fs')
var converter = require('json-2-csv');

module.exports = {
    exportToCsv: (req,res)=>{
        const filename   = "products.csv";
        Product.find({})
               .lean()
               .exec({})
               .then((products)=>{
                      res.setHeader('Content-Type', 'text/csv')
                      res.setHeader("Content-Disposition", 'attachment; filename='+filename)
                      let csv =  json2csv(products, ['name', 
                                                     'descr', 
                                                     'price',
                                                     'weight',
                                                     'active',
                                                     'category',
                                                     'tags',
                                                     'props',
                                                     'images'])
                      res.send(csv)
               },(err)=>{
                  res.send(err)
		          res.statusCode = 20
            })
       }
}