const express = require('express');
const cors = require('cors');
const datafull = require('../data.json');
const app = express();

app.get('/api/products', (req, res) => {
    res.send(datafull.products);
})

// Configuraciones
app.set('port', process.env.PORT || 4500);

// Middlewares
app.use(cors());
app.use(express.json());

// routes

module.exports = app;