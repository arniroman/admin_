const mongoose = require('mongoose');
const Product = require('../models/product');

module.exports = (app) => {

  app.post('/product',(req,res)=>{

    const result = req.body.user
    const product = new Product(result);
    //for debagging
    console.log(result);
    //
    product.save((err,createdProduct)=>{
    //for debagging
    console.log('result:',createdProduct );
    res.send(product);
  })
  }) 
  
    Product.find({},(err,product)=>{
    //console.log(err,product)
  
    app.get('/product',(req,res)=>{
    res.send(product)
      })
    })
}


