// Core modules
const path = require('path');
const express = require('express');
const helmet = require('helmet')();
const cors = require('cors');
const morgan = require('morgan');

// Init app
const app = express();

app.use(cors());
app.use(helmet);
app.use(morgan('tiny'));

// initialize routes
const indexRouter = require('../routes/index');
const categoriesRouter = require('../routes/categories');

app.use(indexRouter);
app.use(categoriesRouter);

module.exports = app;