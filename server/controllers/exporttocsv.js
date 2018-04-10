const mongoose = require('mongoose')
const Product = require('../models/product')
const fast_csv = require('fast-csv')
const Json2csvParser = require('json2csv').Parser



module.exports = {

    exportToCsv: (req,res) => {
        const filename  = "products.csv";
        Product.find({})
               .lean()
               .then((products)=>{
                      res.setHeader('Content-Type', 'text/csv')
                      res.setHeader("Content-Disposition", 'attachment; filename='+filename)
                      const json2csvParser = new Json2csvParser();
                      const csv = json2csvParser.parse(products);
                      console.log(csv)
                      res.send(csv)
               })
               .catch(err => {
                res.status(400).send(err);
                console.log("we got an error");
              })
       },

       importToCsv: (req, res) => {
        if (!req.files)
        return res.status(400).send('No files were uploaded.')
        var productFile = req.files.file
        var goods = []
        fast_csv
        .fromString(productFile.data.toString(), {
            headers: true,
            ignoreEmpty: true
        })
        .on("data", function(data){
            data['_id'] = new mongoose.Types.ObjectId()
            console.log(data,'datas')
                /** Parse data **/
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