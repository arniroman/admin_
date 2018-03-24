const product = require('./product')
const properties = require('./properties')
const exporttocsv = require('./exporttocsv')
module.exports = function(app){
    app.use('/product', product),
    app.use('/properties', properties)
    app.use('/exporttocsv', exporttocsv)
}