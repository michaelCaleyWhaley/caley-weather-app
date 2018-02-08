
const request = require('request');


request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=53%20burton%20road%20cottingham',
    json: true    
}, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log(body);
});

// key: 'AIzaSyAs2bVbCOCdLUN3defSZQ1wNsI4-XsR7js'
