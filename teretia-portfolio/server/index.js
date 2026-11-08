const express = require('express');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/portfolio', portfolioRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
