const routes = require('../src/app/routes/index');
const express = require('express');
const app = express();


routes(app)

app.listen(3000, () => console.log('API Criptomoedas - Servidor on'));

module.exports = app;