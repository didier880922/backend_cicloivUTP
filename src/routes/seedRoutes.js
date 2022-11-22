const express = require('express');
const Product = require('../models/productModel.js');
const User = require('../models/userModel.js');

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
    const createProducts = await Product.find();
    const createUsers = await User.find();
    res.json({createProducts, createUsers });
});


module.exports = seedRouter;