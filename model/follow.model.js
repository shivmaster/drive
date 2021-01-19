const mongoose = require('mongoose');

const followSchema = mongoose.Schema(
    {
        followBy: {
            type: String,
            required: true
        },
        followTo: {
            type: String,
            default: null
        },
        Status: {
            type: Number,
            default: 1
        }


    }, { timeStamp: true }
)

const follow = mongoose.model('followList', followSchema);
module.exports = follow;