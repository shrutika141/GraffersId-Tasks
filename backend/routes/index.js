const router = require('express').Router()
const companyController = require('../controller/company')
const reviewController = require('../controller/review')

router.post('/add-company', companyController.addCompany)
router.get('/all-company/:location?/:sort?', companyController.getCompany)
router.post('/add-review', reviewController.addReview)
router.get('/get-review/:id', reviewController.getReview)

module.exports = router