const express = require('express')
const {getAllBootcamps,getSingleBootcamps,createBootcamp,updateBootcamp,deleteBootcamp} = require('../controllers/BootcampController')
const router = express.Router()



router.route('/').get(getAllBootcamps)
                 .post(createBootcamp)
                
router.route('/:id').get(getSingleBootcamps)
                    .put(updateBootcamp)
                    .delete(deleteBootcamp)

module.exports = router