const mongoose = require('mongoose')

const propertiesSchema = mongoose.Schema({
    name      : { type: String, required: true },
    category  : { type: String, required: true }
})

const Properties = mongoose.model('Properties',propertiesSchema)

module.exports = Properties