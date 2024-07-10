const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

router.get('/tokens', tokenController.getTokens);

module.exports = router;
