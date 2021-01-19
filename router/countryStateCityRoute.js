const router = require('express').Router();
const controller = require('../controller/csController')

router.get('/countryList', controller.countryList)
router.post('/cityList', controller.cityList)
module.exports = router