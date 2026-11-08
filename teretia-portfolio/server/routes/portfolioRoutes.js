const express = require('express');
const router = express.Router();
const portfolioModel = require('../models/portfolioModel');

router.get('/', (req, res) => {
  res.json(portfolioModel.getPortfolioData());
});

module.exports = router;
