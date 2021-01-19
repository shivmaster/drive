const List = require('country-list');
const csc = require('country-state-city')
const countryList = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const list = csc.default.getAllCountries()
            resolve({
                CountryName: list
            })
        } catch (error) {
            console.log(error)
        }
    })
}
const cityList = (Code) => {
    return new Promise((resolve, reject) => {
        console.log(Code.countryCode)
        const list = csc.default.getCitiesOfCountry(Code.countryCode)
        resolve({
            City: list
        })
    })
}


module.exports = {
    countryList,
    cityList
}