const router = require('express').Router()
const controllers = require('../../controllers/product')


router.post('/',(req,res) => {
    const result = req.body.product
    controllers.newProduct(result,req,res)
})

router.get('/:id',(req,res,next)=>{
    controllers.getAllProduct(req,res)   
})

router.delete('/:id',(req,res)=>{
    const id = req.params.id
    controllers.deleteProduct(id,req,res)
})

router.put('/:id',(req,res)=>{
    const id = req.params.id
    controllers.updateProduct(id,req,res,
                              req.body.name,
                              req.body.descr,
                              req.body.price,
                              req.body.weight,
                              req.body.active,
                              req.body.category,
                              req.body.props,
                              req.body.images
    )
})

module.exports = router