const router = require('express').Router()
var csv = require('csv-express')
const controllers = require('../../controllers/exporttocsv')

router.get('/', (req, res) => {
      controllers.exportToCsv(req,res)
  })
router.post('/', (req,res) => {
    controllers.importToCsv(req,res)
})

module.exports = router