const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(3000);

console.log('App running on port 3000');

module.exports = app;
