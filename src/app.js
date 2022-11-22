const express = require('express');
const cors = require('cors');
const app = express();
const seedRouter = require('./routes/seedRoutes');
const productRouter = require('./routes/productRoutes');
const Product = require('./models/productModel');
const userRouter = require('./routes/userRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Routes
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

// Configuraciones
app.set('port', process.env.PORT || 4500);

module.exports = app;