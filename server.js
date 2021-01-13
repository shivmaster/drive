
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
const db = require('./lib/db')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static("upload"))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send({ success: true })
})

//roting path
app.use('/api', require('./router/userRoutes'))



app.listen(port, () => console.log(`server started on ${port}`))