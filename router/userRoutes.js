const router = require('express').Router();
const controller = require('../controller/userController')
const File = require('../controller/uploadController.js')
const { auth } = require('../middleware/auth')
const { login, editProfile } = require('../middleware/validatior')
const { uploadImg } = require('../middleware/fileUpload')

//================= User ================================
router.post('/login', login, controller.login)
router.post('/verifyOtp', controller.verifyOtp)
router.post('/userList', controller.userList)
router.post('/profileEdit', uploadImg, auth, controller.profileEdit)
router.post('/getLocationByCordinates', controller.getLocationByCordinates)
router.get('/profileStatus', auth, controller.profileStatus)


//================= file Upload =========================
router.post('/uploadPost', uploadImg, auth, File.uploadPost)
router.post('/uploadPostList', auth, File.uploadPostList)


module.exports = router 