const axios = require('axios');

exports.fetchQuote = async (token, chain) => {
    try {
        const response = await axios.post('https://aggregator-api.xy.finance/v1/quote', {
            token: token,
            chain: chain
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching quote:', error);
        throw new Error('Failed to fetch quote');
    }
};
