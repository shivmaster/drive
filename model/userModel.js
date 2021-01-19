const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            default: null
        },
        phoneNumber: {
            type: Number,
            unique: true,
            required: true,
            trim: true,
        },
        country: {
            type: String,
            default: null
        },
        city: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        role: {
            type: Number,
            default: 1
        },
        otp: {
            type: String,
            default: null
        },
        otp_expire: {
            type: String,
            default: null
        },
        following: {
            type: Number,
            default: 0
        },
        follower: {
            type: Number,
            default: 0
        },
        privacyStatus: {
            type: String,
            default: null
        },
        isdCode: {
            type: Number,
            default: 0
        },
    }, { timestamps: true }
)

const User = mongoose.model('User', userSchema);
module.exports = User;