const express = require('express');
const app = express();
const addressRoutes = require('./routes/addressRoutes');

app.use('/api', addressRoutes);
