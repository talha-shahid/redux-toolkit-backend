
const mongoose = require('mongoose');

// Define the schema for the "products" collection
const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
});

// Create a model for the "products" collection
const Product = mongoose.model('Product', productSchema);

module.exports = Product;