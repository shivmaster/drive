const User = require('../model/userModel');
const jwt = require('jsonwebtoken')
const message = require('../utils/message')
require('dotenv').config()

const signUp = (body) => {
    try {
        return new Promise(async (resolve, reject) => {
            const findUser = await User.findOne({
                phoneNumber: body.phoneNumber
            })
            if (findUser == null) {
                const saveUser = await User.create(body)
                if (saveUser) resolve(message.Create);
                resolve(message.NotCreate)
            } resolve(message.Already);
        })
    } catch (err) {
        reject(err)
    }
}

const login = (body) => {
    try {
        const { phoneNumber } = body;
        var digits = '0123456789';
        let OTP = '';
        return new Promise(async (resolve, reject) => {
            for (let i = 0; i < 6; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            const loginUser = await User.findOne(body);
            if (!loginUser) resolve(message.UserNotFound)
            const token = jwt.sign({
                mobile: loginUser.phoneNumber,
                role: loginUser.role
            }, process.env.KEY, { expiresIn: '12h' });

            await User.update({ phoneNumber: phoneNumber }, { $set: { otp: OTP } });
            resolve({
                status: true,
                statusCode: 200,
                token: token,
                Otp: JSON.parse(OTP)
            })
        })
    } catch (err) {
        reject(err)
    }
}

const verifyToken = (body) => {
    try {
        const { phoneNumber, otp } = body;
        return new Promise(async (resolve, reject) => {
            const findUser = await User.findOne({ phoneNumber });
            if (!findUser) resolve(message.UserNotFound)
            if (findUser.otp == otp) resolve(message.Login)
            resolve(message.OptNotMatch)
            await User.update({ phoneNumber: phoneNumber }, { $set: { otp: null } })
        })
    } catch (err) {
        reject(err)
    }
}

module.exports = {
    signUp,
    login,
    verifyToken,
}