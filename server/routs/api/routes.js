const product = require('./product')
const properties = require('./properties')
const exportImportToCSV = require('./exportImportToCsv')
module.exports = function(app){
    app.use('/product', product),
    app.use('/properties', properties)
    app.use('/exporttocsv', exportImportToCSV)
}