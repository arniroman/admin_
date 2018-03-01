const mongoose = require('mongoose')

const propertiesSchema = mongoose.Schema({
    name            : String,
    possibleValues  : Array
})

const Product = mongoose.model('Properties',propertiesSchema)

module.export = Product