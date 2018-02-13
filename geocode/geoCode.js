const request = require('request');

var geoCodeAddress = (urlQuery, callback) => {
    urlQuery = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(urlQuery);
    request({
        url: urlQuery,
        json: true
    }, function (error, response, body) {
        if (error) {
            callback('Unable to connect to Google servers');
        } else if (body.status === "ZERO_RESULTS") {
            callback('Address not recognised.');
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lattitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } else {
            callback(body.error_message);
        }
    });
};

module.exports = {
    geoCodeAddress
};