const router = require('express').Router()
const controllers = require('../../controllers/product')

router.post('/',(req,res) => {
    const result = req.body.product
    controllers.newProduct(result,(err,docs) => {
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(docs)
    })

})

router.get('/',(req,res)=>{
    controllers.getAllProduct((err,docs) => {
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(docs)
    })
})

module.exports = router