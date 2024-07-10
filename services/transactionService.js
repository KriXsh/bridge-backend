const axios = require('axios');

exports.fetchTransactionParams = async (token, chain) => {
    try {
        const response = await axios.post('https://aggregator-api.xy.finance/v1/params', {
            token: token,
            chain: chain
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching transaction parameters:', error);
        throw new Error('Failed to fetch transaction parameters');
    }
};
