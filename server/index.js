const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const config = require('./config')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(express.static('client'))
//create routes for app
const routes = require('./routs/api/routes')(app)


module.exports.start = () => app.listen(config.port, () => console.log('App listening on port '+ config.port))



