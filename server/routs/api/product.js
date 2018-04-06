const router = require('express').Router()
const controllers = require('../../controllers/product')


router.post('/',(req,res) => {
    const result = req.body.product
    controllers.newProduct(result,req,res)
})

router.get('/:id',(req,res,next)=>{
    controllers.getAllProduct (req,res)   
})

router.delete('/:id',(req,res)=>{
    const id = req.params.id
    controllers.deleteProduct(id,req,res)
})

router.put('/:id',(req,res)=>{
    const id = req.params.id
    controllers.updateProduct(id,req,res)
})

module.exports = router