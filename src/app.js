const express = require('express');
const cors = require('cors');
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4500);

// Middlewares
app.use(cors());
app.use(express.json());

// routes

module.exports = app;