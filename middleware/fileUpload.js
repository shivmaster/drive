const multer = require('multer')
const moment = require('moment')
const myDate = new Date();
const date = moment(myDate).format('lll');
require('dotenv').config()


const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, 'upload/')
    },
    filename: function (req, file, cd) {
        cd(null, date + file.originalname)
    }
})

const uploadImg = multer({
    storage: storage
}).single('image')


module.exports = {
    uploadImg
}
