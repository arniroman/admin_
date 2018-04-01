const router = require('express').Router()
const controllers = require('../../controllers/setDiscount')


router.post('/',(req,res) => {
    controllers.setDiscount(req,res)   
})

router.get('/',(req,res) => {
    controllers.getDiscount(req,res)
})

module.exports = router