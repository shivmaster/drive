const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        phoneNumber: {
            type: Number,
            unique: true,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true
        },
        role: {
            type: Number,
            default: 1
        },
        otp: {
            type: String,
            default: null
        }
    }
)

const User = mongoose.model('User', userSchema);
module.exports = User;