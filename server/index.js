const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const config = require('./config')
const mongoose = require('mongoose')
const discount = require('./helpers/croneForDiscount')
mongoose.Promise = require('bluebird')
const fileUpload = require('express-fileupload')

//connected to db

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

app.use(express.static('client'))

//create routes for app
const routes = require('./routs/api/routes')(app)


app.get("*", (request, response) => {
	response.sendFile(path.resolve(__dirname, "../client/", "index.html"))
  })

  module.exports = app

module.exports.start = () => app.listen(process.env.PORT || 8800, () => console.log('App listening on port '+ config.port))



