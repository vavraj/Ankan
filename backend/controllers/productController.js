const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

exports.addProduct = async (req, res) => {
    const { name, description, price, image, category, inStock } = req.body;
    try {
        const product = new Product({ name, description, price, image, category, inStock });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add product' });
    }
};

