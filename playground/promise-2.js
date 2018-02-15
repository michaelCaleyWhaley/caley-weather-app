
const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        address = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address);
        request({
            url: address,
            json: true
        }, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject('Failed to gather address');
            } else if(body.status === 'OVER_QUERY_LIMIT'){
                reject('Over Google query limit');
            } else {
                resolve(body.results[0].formatted_address);
            }
        });
    });
};

geocodeAddress('n1').then((response) => {
    console.log(response);
}).catch((errorMessage) => {
    console.log(errorMessage);
});