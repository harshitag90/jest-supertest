const axios = require('axios');

const axiosInstance = axios.default.create({
    baseURL: 'https://feedjar.herokuapp.com/'
});

module.exports = axiosInstance;