// routes/products.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');



// Route to retrieve all products
router.get('/', async (req, res) => {
    // try {
        // Retrieve all products from the database
        const products = await Product.find({});
        res.json(products);
    // } catch (err) {
    //     res.status(500).json({ message: err.message });
    // }
});

module.exports = router;