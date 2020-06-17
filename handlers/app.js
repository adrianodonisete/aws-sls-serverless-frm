const express = require('express');
const sls = require('serverless-http');
const app = express();
app.get('/teste', async (req, res, next) => {
  res.status(200).send('Hello World 3!');
});
module.exports.srv = sls(app);