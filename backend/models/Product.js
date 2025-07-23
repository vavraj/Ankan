const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    inStock: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

