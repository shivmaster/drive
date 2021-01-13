const multer = require('multer')
const moment = require('moment')
require('dotenv').config()
const myDate = new Date();
const date = moment(myDate).format('lll');

const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, 'upload/')
    },
    filename: function (req, file, cd) {
        cd(null, date + file.originalname)
    }
})

const upload = multer({
    storage: storage
}).any('');

const fileUpload = (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            res.json(err)
        } else {
            const imagename = req.files;
            const path = []
            imagename.map(data => {
                const data1 = {
                    imageurl: `${process.env.URL}${date}${data.originalname}`,
                    filename: data.filename
                }
                path.push(data1)
            })
            res.json({
                "success": true,
                "message": 'Image uploaded',
                path: path
            })
        }
    })
}

module.exports = {
    fileUpload,
}
