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

router.get('/:id',(req,res,next)=>{
   /* controllers.getAllProduct((err,docs) => {
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(docs)
    })*/
   /*let perPage = 5
    let page = req.params.id || 1
        console.log(req.params.id,'id')*/
        /* Product
           .find({})
           .skip((perPage * page) - page)
           .limit(perPage)
           .exec((err,products)=>{
                Product.count().exec((err,count)=>{
                    if(err) return next(err)
                   // console.log(count)
                    res.send({
                        product: products,
                        current: page,
                        pages: Math.ceil(count/perPage),
                        perPage: perPage
                    })
                })
           })
           */
     // ---------todo----------//  
     console.log(req.params.id)  
        const perPage = 5
        const pages = []
        const page = Number(req.params.id) || 1
        const LastIndex = page * perPage
        const firsIndex = LastIndex - perPage

        Product
            .find({},(err,product)=>{
                for(let i = 1; i <= Math.ceil(product.length/perPage); i++){
                    pages.push(i)
                }
                res.send({product : product.slice(firsIndex,LastIndex),
                    current       : page,
                    countProduct  : product.length,
                    pages         : pages,
                    perPage       : perPage})
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