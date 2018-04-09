const router = require('express').Router()
const controllers = require('../../controllers/properties')

router.post('/',(req,res) => {
    controllers.newProperties(req,res)
})

router.get('/',(req,res) => {
    controllers.getAllProperties(req,res)
})

module.exports = router