const router = require('express').Router()
const controllers = require('../../controllers/historyShopping')

router.get('/',(req,res)=>{
    controllers.findCollection(req,res)
})



module.exports = router