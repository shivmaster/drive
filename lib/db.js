const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('connected to mongodb successfully'))
module.exports = {
    db
}