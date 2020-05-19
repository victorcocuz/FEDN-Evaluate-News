const dotenv = require('dotenv');
dotenv.config();

var path = require('path')

// Dependencies
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
var cors = require('cors')
const aylien = require("aylien_textapi")

// Start App and include packages
const app = express()

app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// Designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.post('/test', function (req, res) {
    let data = {};
    // Get data from Aylien API
    textapi.sentiment({
        'url': req.body.url
    }, function(error, response) {
        if (error === null) {
            console.log(response);
            data = {
                polarity: response.polarity,
                subjectivity: response.subjectivity,
                polarity_confidence: Math.round((response.polarity_confidence + Number.EPSILON) * 1000) / 1000,
                subjectivity_confidence: response.subjectivity_confidence
            }
            res.send(data);
            console.log('data is ' + data);
        }
    });

})

module.exports = app;