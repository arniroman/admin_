const router = require('express').Router()
const controllers = require('../../controllers/getGeneralPage')

router.get('/',(req,res) => {
    controllers.deleteOldDataDiscount(req,res)
})

module.exports = router