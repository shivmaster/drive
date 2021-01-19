const {
    cscHelper
} = require('../helper/index');
const catchAsync = require('../utils/catchAsync');

const countryList = catchAsync((req, res) => {
    cscHelper.countryList()
        .then((country) => { res.json(country) })
})
const cityList = catchAsync((req, res) => {
    cscHelper.cityList(req.body).then((city) => { res.json(city) })
})

module.exports = {
    countryList,
    cityList
} 