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
router.get('/:id',(req,res)=>{
   
})    

router.put('/',(req,res)=>{
   controllers.deletProductById(req.body.iD,(err,todo)=>{
    if(err) return status(500).send(err);
    const message ={
        message: 'Todo succesfull delete',
        id: todo._id
    }
    return res.status(200).send(message)
   })
})    
})

module.exports = router