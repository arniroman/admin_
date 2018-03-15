const product = require('./product')
const properties = require('./properties')
module.exports = function(app){
    app.use('/product', product),
    app.use('/properties', properties)
}