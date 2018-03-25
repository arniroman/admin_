const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const config = require('./config')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const Product = require('./models/product')
var csv = require('csv-express');
var csv1 = require('fast-csv')
const fileUpload = require('express-fileupload')
var json2csv = require('json2csv').parse
const Json2csvParser = require('json2csv').Parser;
//connected to db
//mongoose.Promise = global.Promise
mongoose.connect(config.url)

const db = mongoose.connection

db.on('error', err => {
	console.log('error connection', err)
})

db.once('open', () => {
  console.log("Connected")
})

const app = express()

app.use(fileUpload())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.post('/csv', function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
     
    var productFile = req.files.file;
    var goods = [];
    csv1
     .fromString(productFile.data.toString(), {
         headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
            if(typeof(data.props)!= 'object'){
                data.props = JSON.parse(data.props)
            }  
         goods.push(data);
     })
     .on("end", function(){
      Product.create(goods, function(err, documents) {
            if (err) throw err;
         });
          
         res.send(goods.length + ' goods have been successfully uploaded.');
     });
})

app.use(express.static('client'))
//create routes for app
const routes = require('./routs/api/routes')(app)


module.exports.start = () => app.listen(config.port, () => console.log('App listening on port '+ config.port))



