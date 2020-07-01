const NodeGeocoder = require('node-geocoder');
// require('dotenv').config({
//     path: 'config/config.env'
// });

console.log('API_KEY', process.env.GEOCODE_API_KEY);

const options = {
    provider: process.env.GEOCODE_PROVIDER,
    httpAdapter: 'https',
    apiKey: process.env.GEOCODE_API_KEY,
    formater: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
