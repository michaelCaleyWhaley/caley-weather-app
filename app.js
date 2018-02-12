console.log('');
console.log('Example command: node app.js --address "1 Curtain Place"');
console.log('');

const request = require('request');
const yargs = require('yargs');
// google api key: 'AIzaSyAs2bVbCOCdLUN3defSZQ1wNsI4-XsR7js'

const argv = yargs.argv.address;
let urlQuery = yargs.argv.address.split(' ').join('%20');
const googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
urlQuery = googleUrl.concat(urlQuery);

request({
    url: urlQuery,
    json: true
}, function (error, response, body) {
    if (body.results.length !== 0) {
        console.log(JSON.stringify(`Address: ${body.results[0].formatted_address}`, undefined, 2));
        console.log(JSON.stringify(`Lattitude: ${body.results[0].geometry.location.lat}`, undefined, 2));
        console.log(JSON.stringify(`longitude: ${body.results[0].geometry.location.lng}`, undefined, 2));
    } else {
        console.log(body.error_message);
    }
});