const router = require('express').Router()
const controllers = require('../../controllers/properties')

router.post('/',(req,res) => {
    const properties = req.body
    console.log('post props',properties)
    controllers.newProperties(properties,(err,docs) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        }
        res.send(docs)
    })
})

router.get('/',(req,res) => {
    controllers.getAllProperties((err,docs)=>{
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(docs)
    })
})

module.exports = router