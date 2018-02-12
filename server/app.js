const express = require('express');
const cors = require('cors');
const path = require('path');
const initializeRedisData = require('./redis/initializeRedisData');
const logger = require('./utils');
const routerHandler = require('./routes');

// Fetch historical data from various APIs and initialize REDIS with that data
initializeRedisData();

const app = express();
app.use(logger);
app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res) => {
  // split api calls from website navigation
  switch (req.url.split('/')[1]) {
    case 'api':
      routerHandler(req, res);
      break;
    default:
      res.sendFile(path.join(__dirname, '../build', 'index.html'));
  }
});

app.listen(4000);

console.log('Express app running on port 4000');

module.exports = app;
