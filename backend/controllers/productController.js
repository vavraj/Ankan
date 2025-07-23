const Product = require('../models/Product');

// @desc    Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch products' });
    }
};

// @desc    Add a new product
exports.addProduct = async (req, res) => {
    const { name, description, price, image, category, inStock } = req.body;

    try {
        const product = new Product({
            name,
            description,
            price,
            image,
            category,
            inStock
        });

        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add product' });
    }
};
