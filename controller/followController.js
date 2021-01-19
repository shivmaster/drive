const {
    Follow
} = require('../helper/index');
const catchAsync = require('../utils/catchAsync');

const followUser = catchAsync((req, res) => {
    Follow.followUser(req.body, req.user).then((result) => {
        res.json(result);
    })
})

const following = catchAsync((req, res) => {
    Follow.following(req.user).then((result) => {
        res.json(result);
    })
})

const followerList = catchAsync((req, res) => {
    Follow.followerList(req.user).then((result) => {
        res.json(result);
    })
})

module.exports = {
    followUser,
    following,
    followerList
}