// Vercel serverless function: serves the same data as the Express route /api/portfolio
const portfolioModel = require('../server/models/portfolioModel');

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  res.status(200).json(portfolioModel.getPortfolioData());
};
