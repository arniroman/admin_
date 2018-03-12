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

router.delete('/:id',(req,res)=>{
    controllers.deleteProduct(req.params.id,(err, todo) => {  
        if (err) return res.status(500).send(err);
        const response = {
            message: "Todo successfully deleted",
            id: todo._id
        };
        return res.status(200).send(response);
    })
})

router.put('/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)
    controllers.updateProduct(id,req.body.name,
                                 req.body.descr,
                                 req.body.price,
                                 req.body.weight,
                                 req.body.active,
                                 req.body.category,
                                 req.body.props,
                                 req.body.images,
                                 (err,todo)=>{
        if (err) return res.status(500).send(err);
        const response = {
            message: "Todo successfully updated",
            id: todo._id
        };
        return res.status(200).send(response);
    })
})


module.exports = router