
const yargs = require('yargs');
// axios uses built in promises
const axios = require('axios');

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

var urlQuery = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(argv);

axios.get(urlQuery).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    } else if (response.data.status === 'OVER_QUERY_LIMIT') {
        throw new Error('Google query limit');
    } else {
        console.log(response.data.results[0].formatted_address);
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherUrl = 'https://api.darksky.net/forecast/0482e09a8a76cc8fb9236b92f4e6d6a2/' + lat + ',' + lng + '?units=si';
        return axios.get(weatherUrl);
    }
}).then((response) => {
    console.log(`Daily: ${response.data.currently.summary}`);
    console.log(`Temp: ${response.data.currently.temperature}°C`);
    console.log(`Week: ${response.data.daily.summary}`);
}).catch((error) => {
    if (error.code === 'ENOTFOUND') {
        console.log('Unable to connect to API');
    } else {
        console.log(error.message);
    }
});