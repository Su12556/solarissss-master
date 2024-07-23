const express = require('express');
const app = express();
const addressRoutes = require('./modules/address/routes');

app.use('/api', addressRoutes);
