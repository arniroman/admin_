const product = require('./product')
const properties = require('./properties')
const exportImportToCSV = require('./exportImportToCsv')
const historyShopping = require('./historyShopping')
const currentHistory = require('./currentHistory')
const discount = require('./discountForProduct')
const allUsers = require('./users')
const admin = require('./admin')
const getGeneralPage = require('./generalPage')

module.exports = function(app){
    app.use('/product', product),
    app.use('/properties', properties),
    app.use('/upload', exportImportToCSV),
    app.use('/historyShop', historyShopping),
    app.use('/users', allUsers),
    app.use('/currentHistory',currentHistory),
    app.use('/discount',discount),
    app.use('/compareData',getGeneralPage),
    app.use('/admin', admin)
}