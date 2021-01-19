const router = require('express').Router();
const Today = require('../controller/todayController')
const { auth } = require('../middleware/auth')

router.get('/privacyPolicy', Today.privacyPolicy)
router.get('/userProfile', auth, Today.userProfile)
// router.get('/followerList', auth, Today.followerList)



module.exports = router 