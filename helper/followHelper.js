const { follow } = require('../model/index');
const message = require('../utils/message')
require('dotenv').config()

const followUser = (body, auth) => {
    try {
        return new Promise(async (resolve, reject) => {
            const { followTo } = body
            const { id } = auth
            const data = {
                followBy: id,
                followTo: followTo
            }
            const checkParam = await follow.findOne(data)
            if (checkParam == null) {
                const successFollow = await follow.create(data);
                if (successFollow) resolve(message.Follow)

            } else {
                const successUnfollow = await follow.deleteOne(data);
                if (successUnfollow) resolve(message.Unfollow)
            }
        })
    } catch (err) {
        reject(err)
    }
}
const following = (auth) => {
    try {
        return new Promise(async (resolve, reject) => {
            const { id } = auth

            const checkList = await follow.find({ followBy: id })
            resolve({
                status: true,
                data: checkList
            })
        })
    } catch (err) {
        reject(err)
    }
}

const followerList = (auth) => {
    try {
        return new Promise(async (resolve, reject) => {
            const { id } = auth

            const checkList = await follow.find({ followTo: id })
            resolve({
                status: true,
                data: checkList
            })
        })
    } catch (err) {
        reject(err)
    }
}

module.exports = {
    followUser,
    following,
    followerList
}