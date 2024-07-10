const tokenService = require('../services/tokenService');

exports.getTokens = async (req, res) => {
    try {
        const tokens = await tokenService.fetchTokens();
        res.json(tokens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
