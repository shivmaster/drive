const { Today } = require('../helper/index');
const catchAsync = require('../utils/catchAsync');
const path = require('path');

const privacyPolicy = catchAsync((req, res) => {
    const filePath = path.join(__dirname, '../public/index.html');
    Today.privacyPolicy(filePath,res).then((result) => {
        res.json(result);
    })
})

const userProfile = catchAsync((req, res) => {
    Today.userProfile(req.user).then((result) => {
        res.json(result);
    })
})


module.exports = {
    privacyPolicy,
    userProfile
}