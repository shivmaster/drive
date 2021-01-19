const { fileUpload } = require('../helper/index');

const uploadPost = (req, res) => {
    fileUpload.uploadPost(req.body, req.file, req.user).then((result) => {
        res.json(result)
    })
}
const uploadPostList = (req, res) => {
    fileUpload.uploadPostList(req.body, req.user).then((result) => {
        res.json(result)
    })
}


module.exports = {
    uploadPost,
    uploadPostList
}

