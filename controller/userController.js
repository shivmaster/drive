const { userHelper } = require('../helper/index');
const catchAsync = require('../utils/catchAsync');
// const User = require('../model/userModel');


const signUp = catchAsync((req, res) => {
    userHelper.signUp(req.body).then((result) => {
        res.json(result);
    })
})

const login = catchAsync((req, res) => {
    const body = req.body
    userHelper.login(body).then((result) => {
        res.json(result);
    })
})

const verifyToken = catchAsync((req, res) => {
    const body = req.body
    userHelper.verifyToken(body).then((result) => {
        res.json(result);
    })
})

module.exports = {
    signUp,
    login,
    verifyToken
}