const product = require('./product')
const properties = require('./properties')
const exportImportToCSV = require('./exportImportToCsv')
const historyShopping = require('./historyShopping')
const discount = require('./discountForProduct')
const allUsers = require('./users')
const auth = require('./auth')


module.exports = function(app){
    app.use('/product', product),
    app.use('/properties', properties),
    app.use('/upload', exportImportToCSV),
    app.use('/historyShop', historyShopping),
    app.use('/users', allUsers),
    app.use('/discount',discount),
    app.use('/admin', auth)
}