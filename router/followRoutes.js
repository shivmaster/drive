const router = require('express').Router();
const Follow = require('../controller/followController')
const { auth } = require('../middleware/auth')

router.post('/followUser', auth, Follow.followUser)
router.get('/followingList', auth, Follow.following)
router.get('/followerList', auth, Follow.followerList)



module.exports = router 