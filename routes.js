const express = require('express');
const bodyParser = require('body-parser');
const { merge } = require('lodash');
const libs = require('./libs');

const router = express.Router();

libs.forEach((lib) => {
  router[lib.method](
    lib.endpoint,
    merge([bodyParser.json(), lib.middleware]),
    (req, res) => res.status(req.data.status).json(req.data.result),
  );
});

module.exports = router;
