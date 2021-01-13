const router = require('express').Router();
const controller = require('../controller/userController')
const File = require('../helper/fileHelper')
const { auth } = require('../middleware/auth')
const { validator } = require('../middleware/validatior')


router.post('/signUp', validator, controller.signUp)
router.post('/login', controller.login)
router.post('/verifyToken', controller.verifyToken)

//================= file Upload =========================
router.post('/fileUpload',File.fileUpload)

module.exports = router 