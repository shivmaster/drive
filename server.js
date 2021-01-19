const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
const db = require('./lib/db')
const port = process.env.PORT || 5000;
const favicon = require('serve-favicon');
const app = express();
var morgan = require('morgan')

app.use(morgan('tiny'))
app.use(favicon(__dirname + '/favicon.ico'));
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.use(express.static("upload"))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send({ success: true })
})

//roting path
app.use('/api', require('./router/index'))

app.listen(port, () => console.log(`server started on ${port}`))