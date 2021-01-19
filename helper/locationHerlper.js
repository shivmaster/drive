const NodeGeocoder = require('node-geocoder');

const getLocationByCordinates = (body) => {
    return new Promise((resolve, reject) => {

        const options = {
            provider: 'openstreetmap'
        };
        const geoCoder = NodeGeocoder(options);
        geoCoder.reverse({
            lat: body.lat,
            lon: body.lng
        })
            .then((result) => {
                console.log(result);
                resolve({
                    success: true,
                    location: result
                })
            })
            .catch((err) => {
                console.log(err);
            });
    })
}

module.exports = { getLocationByCordinates }