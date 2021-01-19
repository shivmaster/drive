const router = require('express').Router();

router.use('/user', require('./userRoutes'))
router.use('/csc', require('./countryStateCityRoute'))
router.use('/follow', require('./followRoutes'))
router.use('/today', require('./todayRoutes'))


module.exports = router
