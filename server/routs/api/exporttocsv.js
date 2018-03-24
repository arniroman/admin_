const router = require('express').Router()
var csv = require('csv-express')
const controllers = require('../../controllers/exporttocsv')

router.get('/', function(req, res) {
      controllers.exportToCsv(req,res)
  })

module.exports = router