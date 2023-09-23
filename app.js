const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const app = express()
let PORT = process.env.PORT || 4000;
//invite new member

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
app.use(express.static('public'))
// app.use(express.json())
// app.use(express.urlencoded())
app.use(cors())

//cloudinary
cloudinary.config({
    cloud_name: "djkmstukm",
    api_key: "332655642942441",
    api_secret: "ZubOPgS-CTeM1BpJvlBLh7mJsk8"
})

//Route Imports
const product = require('./OrderRoute')
app.use('/api/v1', product)


const server = app.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
    console.log("sucessfuly run the server ")
  });

module.exports = app