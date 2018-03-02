const express = require('express');
const cors = require('cors');
const initializeRedisData = require('./redis/initializeRedisData');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/data');
const authRoutes = require('./routes/auth');
const defaultRoutes = require('./routes/default');

// fetch historical data from various APIs and initialize REDIS with that data
initializeRedisData();

const app = express();
// log requests in the console
app.use(morgan('dev'));
// Helmet is a collection of 12 middleware to help set some security headers.
app.use(helmet());
// enable cross origin requests
app.use(cors());
// tell the app to parse HTTP body messages
app.use(bodyParser.json());

// routes
app.use('/api/data', dataRoutes);
app.use('/api/auth', authRoutes);
app.use(defaultRoutes);

app.listen(4000);

console.log('API running on port 4000');

module.exports = app;
