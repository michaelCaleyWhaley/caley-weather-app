// google api key: 'AIzaSyAs2bVbCOCdLUN3defSZQ1wNsI4-XsR7js'
console.log('');
console.log('Example command: node app.js --address "1 Curtain Place"');
console.log('');

const yargs = require('yargs');
const geoCode = require('./geocode/geoCode.js');
const request = require('request');
const weather = require('./weather/weather.js');

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
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        weather.getWeather(results, (weatherError, weatherResults) => {
            if (weatherError) {
                console.log(weatherError);
            } else {
                console.log(weatherResults);
            }
        });
    }
});