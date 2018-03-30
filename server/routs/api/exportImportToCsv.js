const router = require('express').Router()
var csv = require('csv-express')
const controllers = require('../../controllers/exporttocsv')
var multer  = require('multer')
var upload = multer({dest : 'upload/'})

router.get('/', (req, res) => {
      controllers.exportToCsv(req,res)
  })
router.post('/',upload.single('file'),(req,res) => { 
    controllers.importToCsv(req,res)
})

module.exports = router