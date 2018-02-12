// google api key: 'AIzaSyAs2bVbCOCdLUN3defSZQ1wNsI4-XsR7js'
console.log('');
console.log('Example command: node app.js --address "1 Curtain Place"');
console.log('');

const yargs = require('yargs');
const geoCode = require('./geocode/geoCode.js');
const request = require('request');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    }).help()
    .alias('help', 'h')
    .argv.address;

geoCode.geoCodeAddress(yargs.argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        // console.log(results);
        request({
            url: 'https://api.darksky.net/forecast/0482e09a8a76cc8fb9236b92f4e6d6a2/' + results.lattitude + ',' + results.lattitude,
            json: true
        }, (error, response, body) => {
            if (error) {console.log('Unable to connect to forecast.io');}
            console.log('Current summary: ' + body.currently.summary);
            console.log('Current temperature: ' + body.currently.temperature);
            console.log('Daily summary: ' + body.daily.summary);
        });
    }
});