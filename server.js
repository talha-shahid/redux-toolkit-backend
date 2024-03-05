
const express = require('express');
require("./db/conn");
const productsRouter = require('./routes/products');
const Product = require('./models/Product');


// Initialize Express app
const app = express();


// app.use(express.json());


// Define routes or middleware here

// Mount the products route
app.use('/products', async (req, res) => {
      // Retrieve all products from the database
      const products = await Product.find({});
      res.json(products)
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});