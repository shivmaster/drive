const mongoose = require('mongoose')
// mongodb+srv://skyxerDBUsr:qotFmPZQghDK4iax@skyxerdevelopment.teyw7.mongodb.net/skyxerDevelopment?retryWrites=true&w=majority
// mongodb://localhost/my_database

const db = mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('connected to mongodb successfully'))

// const db = mongoose.connect('mongodb+srv://skyxerDBUsr:qotFmPZQghDK4iax@skyxerdevelopment.teyw7.mongodb.net/skyxerDevelopment?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }).then((response) => console.log('connected with mangodb')).catch((err) => console.log('error'));
module.exports = {
    db
}
