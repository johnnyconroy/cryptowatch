const express = require('express');
const cors = require('cors');
const initializeRedisData = require('./redis/initializeRedisData');
const logger = require('../utils');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/data');
const authRoutes = require('./routes/auth');
const defaultRoutes = require('./routes/default');

// fetch historical data from various APIs and initialize REDIS with that data
initializeRedisData();

const app = express();
// log requests in teh console
app.use(logger);
// enable cross origin requests
app.use(cors());
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/api/data', dataRoutes);
app.use('/api/auth', authRoutes);
app.use(defaultRoutes);

app.listen(4000);

console.log('API running on port 4000');

module.exports = app;
