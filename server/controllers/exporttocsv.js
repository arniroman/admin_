const mongoose = require('mongoose')
const stream = require('stream')
const Product = require('../models/product')
var csv = require('csv-express')
var csv1 = require('fast-csv')
var jsonexport = require('jsonexport')
const Json2csvParser = require('json2csv').Parser

const fs = require('fs')
const Json2csvTransform = require('json2csv').Transform



module.exports = {

    exportToCsv: (req,res) => {
        const filename  = "products.csv";
        Product.find({})
               .lean()
               .exec({})
               .then((products)=>{
                      res.setHeader('Content-Type', 'text/csv')
                      res.setHeader("Content-Disposition", 'attachment; filename='+filename)
                      const json2csvParser = new Json2csvParser();
                      const csv = json2csvParser.parse(products);
                      res.send(csv)

               },(err)=>{
                  res.send(err)
		          res.statusCode = 20
            })
       

//         const filename   = "products.csv"
//         res.setHeader('Content-Type', 'text/csv')
//         res.setHeader("Content-Disposition", 'attachment; filename='+filename)
//         // res.contentType('csv')
//        // res.Types('buffer') //responseType('buffer')

//      Product.find().then((products)=>{
//         //           res.setHeader('Content-Type', 'text/csv')
//         //           res.setHeader("Content-Disposition", 'attachment; filename='+filename)
     
     
//      /*stream()
//                     .on('data', (file)=>{
//                         console.log(file)
//                          res.write()
//                      })
//                                 .on('close', ()=> {res.end()})
//                                 .on('error',(err)=>{
//                                     console.log(err)
//                                 })*/
                                


//  //res.setHeader('Content-Type', 'text/csv')
//    //  res.setHeader("Content-Disposition", 'attachment; filename='+filename)
     
//     // res.pipe(new require('stream').PassThrough())
//     // res.write(inputStream)
              
//             //    .then((products)=>{
//             //           res.setHeader('Content-Type', 'text/csv')
//             //           res.setHeader("Content-Disposition", 'attachment; filename='+filename)

//                       const fields = ['name']
//                       const opts = { fields }


//                     const json2csvParser = new Json2csvParser({});
//                     const csv = json2csvParser.parse(products);








//                    // const columnNames = ['name', 'descr', 'price', 'weight','active','category','tags','props','images']
                    


//                      // let csv =  json2csv(products,options )
//                       res.send(csv)
//                },(err)=>{
//                   res.send(err)
// 		          res.statusCode = 20
//             })
       },

       importToCsv: (req, res) => {
        if (!req.files)
        return res.status(400).send('No files were uploaded.')
     
        var productFile = req.files.file
        var goods = []
        csv1
        .fromString(productFile.data.toString(), {
            headers: true,
            ignoreEmpty: true
        })
        .on("data", function(data){
            data['_id'] = new mongoose.Types.ObjectId()
            console.log(data,'datas')
                
                    data.props = JSON.parse(data.props)
                    data.tags = JSON.parse(data.tags)
                  
            goods.push(data)
        })
        .on("end", function(){
        Product.create(goods, function(err, documents) {
                if (err) throw err
            })
            
          res.send(goods.length + ' goods have been successfully uploaded.')
        })
       }
}