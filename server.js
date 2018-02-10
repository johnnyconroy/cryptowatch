// @flow
const express = require('express');
const path = require('path');
const initializeRedisData = require('./server/initializeRedisData');

// Fetch historical data from various APIs and initialize REDIS with that data
initializeRedisData();

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4000);

console.log('Express app running on port 4000');

module.exports = app;
