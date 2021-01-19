const mongoose = require('mongoose');

const stroesSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        image: {
            type: String,
            trim: true,
            default: null
        },
        country: {
            type: String,
            default: null
        },
        city: {
            type: String,
            default: null
        },
        tagPeople: {
            type: Array,
            required: false
        },
        privacy: {
            type: Number,
            default: 1
        },
        lat: {
            type: Number,
            default: 0
        },
        lng: {
            type: Number,
            default: 0
        },
        status: {
            type: Number,
            default: 0
        },
    },
    { timeStamp: true }
)

const stories = mongoose.model('Stories', stroesSchema);
module.exports = stories;