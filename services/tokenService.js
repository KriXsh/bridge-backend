const axios = require('axios');

exports.fetchTokens = async () => {
    try {
        const response = await axios.get('https://aggregator-api.xy.finance/v1/recommendedTokens');
        return response.data;
    } catch (error) {
        console.error('Error fetching tokens:', error);
        throw new Error('Failed to fetch tokens');
    }
};
