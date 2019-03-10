const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { ACCESS_CONTROL_ALLOW_ORIGIN } = require('./config');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ACCESS_CONTROL_ALLOW_ORIGIN);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.use(bodyParser.json({ type: 'application/json' }));
app.use('/', routes);
app.use((req, res) => {
  res.status(404).json({ message: 'NOT FOUND' });
});

module.exports = app;
