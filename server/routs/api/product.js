const router = require('express').Router()
const controllers = require('../../controllers/product')
const Product = require('../../models/product')

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

router.put('/',(req,res)=>{
    controllers.deleteProduct(req.body.id,(err, todo) => {  
        if (err) return res.status(500).send(err);
        const response = {
            message: "Todo successfully deleted",
            id: todo._id
        };
        return res.status(200).send(response);
    })
})

module.exports = router