'use strict';
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var required = require('express-required-fields')

const readAll = require('./crud/functions/read-all');
const create = require('./crud/functions/create');
const deleteFunction = require('./crud/functions/delete');

//APIS
app.use(bodyParser.json({ strict: false, limit: '50mb'}));

app.get('/companies', readAll);

const createRequiredFields = ['name', 'insurance_company_id', 'deductible', 'type']
app.post('/companies',required(createRequiredFields), create);

app.delete('/companies/:id', deleteFunction);

module.exports.handler = serverless(app);


