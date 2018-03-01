const product = require('./product')

module.exports = function(app){
    app.use('/product', product)
}