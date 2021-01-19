const {
    locationHerlper,
    userHelper
} = require('../helper/index');
const catchAsync = require('../utils/catchAsync');

const login = catchAsync((req, res) => {
    userHelper.login(req.body).then((result) => {
        res.json(result);
    })
})

const verifyOtp = catchAsync((req, res) => {
    userHelper.verifyOtp(req.body).then((result) => {
        res.json(result);
    })
})

const profileEdit = catchAsync((req, res) => {
    userHelper.profileEdit(req.body, req.file, req.user).then((result) => {
        res.json(result);
    })
})
const userList = catchAsync((req, res) => {
    userHelper.userList(req.body).then((result) => {
        res.json(result);
    })
})

const getLocationByCordinates = catchAsync((req, res) => {
    locationHerlper.getLocationByCordinates(req.body).then((result) => {
        res.json(result);
    })
})

const profileStatus = catchAsync((req, res) => {
    userHelper.profileStatus(req.user).then((result) => {
        res.json(result);
    })
})

const follow = catchAsync((req, res) => {
    userHelper.followUser(req.body, req.user).then((result) => {
        res.json(result);
    })
})
module.exports = {
    login,
    verifyOtp,
    profileEdit,
    getLocationByCordinates,
    profileStatus,
    follow,
    userList
}