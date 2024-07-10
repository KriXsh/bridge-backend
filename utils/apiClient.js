const axios = require('axios');

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = apiClient;
