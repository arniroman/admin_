const product = require('./product')
const properties = require('./properties')
const exportImportToCSV = require('./exportImportToCsv')
const historyShopping = require('./historyShopping')
const allUsers = require('./users')
module.exports = function(app){
    app.use('/product', product),
    app.use('/properties', properties),
    app.use('/exporttocsv', exportImportToCSV),
    app.use('/historyShop', historyShopping),
    app.use('/users', allUsers)
}