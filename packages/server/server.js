// D:\solarissss-master\packages\server\server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Load extensions
const addressFormRouter = require(path.join(__dirname, '../extensions/addressForm'));

app.use('/api', addressFormRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
