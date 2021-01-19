const { User, follow } = require('../model/index');
const jwt = require('jsonwebtoken')
const message = require('../utils/message')
require('dotenv').config()
var request = require("request");

const login = (body) => {
    try {
        const { phoneNumber } = body;
        var digits = '0123456789';
        const otp_expire = Date.now() + 600 * 1000
        let OTP = '';
        return new Promise(async (resolve, reject) => {
            /*for (let i = 0; i < 6; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }*/
            OTP = '123456';
            const loginUser = await User.findOne(body);
            if (!loginUser) {
                const saveUser = await User.create(body)
                if (saveUser) resolve(message.Create);
                resolve(message.NotCreate)
            }
            await User.updateOne({ phoneNumber: phoneNumber }, { $set: { otp: OTP, otp_expire: otp_expire } });
            resolve({
                status: true,
                statusCode: 200,
                Otp: JSON.parse(OTP)
            })
        })
    } catch (err) {
        reject(err)
    }
}

const verifyOtp = (body) => {
    try {
        const d = new Date();
        const n = d.getTime();
        const { phoneNumber, otp } = body;
        return new Promise(async (resolve, reject) => {
            const findUser = await User.findOne({ phoneNumber });
            if (!findUser) resolve(message.UserNotFound)
            if (n > findUser.otp_expire) resolve(message.OtpExpire)
            if (findUser.otp == otp) {
                const token = jwt.sign({
                    id: findUser.id,
                    mobile: findUser.phoneNumber,
                    role: findUser.role
                }, process.env.KEY, { expiresIn: '12h' });
                resolve({
                    status: true,
                    statusCode: 200,
                    token: token,
                    data: findUser
                })
            }
            resolve(message.OptNotMatch)
        })
    } catch (err) {
        reject(err)
    }
}

const profileEdit = (body, file, user) => {
    try {
        return new Promise(async (resolve, reject) => {
            const { name, country, city } = body
            const { filename } = file;
            const { phoneNumber } = user
            const getNumber = await User.findOne(phoneNumber)
            if (!getNumber) resolve(message.UserNotFound)
            const editUser = await User.updateOne(phoneNumber, { $set: { name: name, country: country, city: city, image: filename } })
            if (editUser) resolve(message.Edit)
        })
    } catch (err) {
        reject(err)
    }
}

const profileStatus = (auth) => {
    try {
        return new Promise(async (resolve, reject) => {
            const { id } = auth
            const checkParam = await User.findOne({ _id: id })
            const { name, country, city, image } = checkParam
            if (name === null && country === null && city === null && image === null) {
                resolve(message.ProfileFill)
            } resolve(message.ProComplete)
        })
    } catch (err) {
        reject(err)
    }
}

const userList = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { limit, offset, city, country } = body
            const userData = await User.find({
                $and: [
                    { country: { $regex: country } },
                    { city: { $regex: city } }

                ]
            }).limit(limit)
            resolve({
                status: true,
                count: userData.length,
                list: userData
            })

        } catch (error) {
            console.log(error);
        }
    })
}




module.exports = {
    login,
    verifyOtp,
    profileEdit,
    profileStatus,
    userList
}
