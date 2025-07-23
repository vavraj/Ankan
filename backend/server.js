const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// ENV setup
dotenv.config();

// DB connection
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // for parsing JSON

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Base route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.use('/api/auth', (req, res, next) => {
  console.log('Request to /api/auth');
  next();
});
