const mongoose = require('mongoose')

const propertiesSchema = mongoose.Schema({
    name            : String,
    possibleValues  : Array
})

const Properties = mongoose.model('Properties',propertiesSchema)

module.exports = Properties