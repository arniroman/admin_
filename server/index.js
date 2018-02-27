const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const config = require('./config');
const controllers = require('./controllers');
const mongoose = require('mongoose');
const Product = require('./models/product')
mongoose.Promise = require('bluebird');
//connected to db
mongoose.connect('mongodb://admin:admin@ds247688.mlab.com:47688/testdatadb');

const db = mongoose.connection;

db.on('error', err => {
	console.log('error connection', err);
});

db.once('open', () => {
  console.log("Connected")
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('client'));

controllers.set(app);

module.exports.start = () => app.listen(config.port, () => console.log('App listening on port '+ config.port));



