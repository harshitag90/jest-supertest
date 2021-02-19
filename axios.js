const axios = require('axios');

const axiosInstance = axios.default.create({
    baseURL: 'https://feedjar.azurewebsites.net/'
});

module.exports = axiosInstance;