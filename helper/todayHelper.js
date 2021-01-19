const { User, follow } = require('../model/index');
const message = require('../utils/message')
require('dotenv').config()

const privacyPolicy = (filePath,res) => {
    try {
        return new Promise(async (resolve, reject) => {
            res.sendFile(filePath)
        })
    } catch (err) {
        reject(err)
    }
}

const userProfile = (auth) => {
    try {
        return new Promise(async (resolve, reject) => {
            const { id } = auth
            const checkUser = await User.find({ _id: id })
            const followerByCount = await follow.find({followBy:id})
            const followToCount = await follow.find({followTo:id})
            await User.updateOne({_id:id},{$set:{followBy:followerByCount,followTo:followToCount}})
            resolve({
                status: true,
                statusCode:200,
                data: checkUser
            })
        })
    } catch (err) {
        reject(err)
    }
}

module.exports = {
    privacyPolicy,
    userProfile
}
