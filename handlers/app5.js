'use strict'

const svless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/info', (req, res) => {
  res.send({ application: 'hello5-app', version: '5' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});

module.exports.srv = svless(app);