const express = require('express');
const cors = require('cors');
const initializeRedisData = require('./redis/initializeRedisData');
const logger = require('../utils');
const routerHandler = require('./routes');

// Fetch historical data from various APIs and initialize REDIS with that data
initializeRedisData();

const app = express();
app.use(logger);
app.use(cors());

app.get('/*', (req, res) => {
  routerHandler(req, res);
});

app.listen(4000);

console.log('API running on port 4000');

module.exports = app;
