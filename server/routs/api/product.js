const router = require('express').Router()
const controllers = require('../../controllers/product')


router.post('/',(req,res) => {
    controllers.newProduct(req,res)
})

router.get('/:id',(req,res,next)=>{
    controllers.getAllProduct (req,res)   
})

router.delete('/:id',(req,res)=>{
    controllers.deleteProduct(req,res)
})

router.put('/:id',(req,res)=>{
    controllers.updateProduct(req,res)
})

module.exports = router