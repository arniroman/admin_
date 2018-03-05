const mongoose = require('mongoose')

const propertiesSchema = mongoose.Schema({
    name      : String,
    category  : String
})

const Properties = mongoose.model('Properties',propertiesSchema)

module.exports = Properties