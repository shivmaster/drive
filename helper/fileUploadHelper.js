const { moments, memes, stories } = require('../model/index')
const uploadPost = (body, file, auth) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { type, country, city, lat, lng, tagPeople } = body;
            const { filename } = file
            const { id } = auth
            const data = {
                userId: id,
                image: filename,
                country: country,
                city: city,
                tagPeople: tagPeople,
                lat: lat,
                lng: lng
            }
            if (type == 'moments') {
                const momentSave = await moments.create(data)
                resolve({
                    status: true,
                    data: momentSave
                })
            } else if (type == 'stories') {
                const storiesSave = await stories.create(data)
                resolve({
                    status: true,
                    data: storiesSave
                })
            } else if (type == 'memes') {
                const memesSave = await memes.create(data)
                resolve({
                    status: true,
                    data: memesSave
                })
            }
        } catch (e) {
            console.log(e)
        }
    })
}

const uploadPostList = (body, auth) => {
    try {
        return new Promise(async (resolve, reject) => {
            const { type, limit, offset } = body;
            const { id } = auth
            if (type === 'moments') {
                const momentData = await moments.find({ userId: id }).limit(limit)
                resolve({
                    status: true,
                    data: momentData.reverse()
                })
            }
            else if (type === 'memes') {
                const memestData = await memes.find({ userId: id })
                resolve({
                    status: true,
                    data: memestData.reverse()
                })
            }
            else if (type === 'stories') {
                const storiestData = await stories.find({ userId: id })
                resolve({
                    status: true,
                    data: storiestData.reverse()
                })
            }
            else {
                resolve({
                    message: 'please Enter Type'
                })
            }
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    uploadPost,
    uploadPostList

}