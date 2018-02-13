
const request = require('request');

var getWeather = (results, callback) => {
    request({
        url: 'https://api.darksky.net/forecast/0482e09a8a76cc8fb9236b92f4e6d6a2/' + results.lattitude + ',' + results.longitude + '?units=si',
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to forecast.io');
        } else if (response.statusCode === 404) {
            callback('Unable to fetch weather');
        } else {
            callback(undefined, 'Current summary: ' + body.currently.summary);
            callback(undefined, 'Current temperature: ' + body.currently.temperature);
            callback(undefined, 'Daily summary: ' + body.daily.summary);
        }
    });
};

module.exports = {
    getWeather
};