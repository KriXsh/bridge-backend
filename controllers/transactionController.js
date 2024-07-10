const transactionService = require('../services/transactionService');

exports.createTransaction = async (req, res) => {
    const { token, chain } = req.body;
    try {
        const params = await transactionService.fetchTransactionParams(token, chain);
        res.json(params);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
