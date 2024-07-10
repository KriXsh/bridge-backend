const quoteService = require('../services/quoteService');

exports.getQuote = async (req, res) => {
    const { token, chain } = req.body;
    try {
        const quote = await quoteService.fetchQuote(token, chain);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
