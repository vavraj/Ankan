const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

// Get all products
router.get('/', getAllProducts);

// Add a new product (basic version, no auth)
router.post('/',protect,admin, addProduct);

module.exports = router;
