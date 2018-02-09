
const request = require('request');
const yargs = require('yargs');
// google api key: 'AIzaSyAs2bVbCOCdLUN3defSZQ1wNsI4-XsR7js'

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=53%20burton%20road%20cottingham',
    json: true    
}, function (error, response, body) {
    console.log(JSON.stringify(`Address: ${body.results[0].formatted_address}`, undefined, 2));
    console.log(JSON.stringify(`Lattitude: ${body.results[0].geometry.location.lat}`, undefined, 2));
    console.log(JSON.stringify(`longitude: ${body.results[0].geometry.location.lng}`, undefined, 2));
});
