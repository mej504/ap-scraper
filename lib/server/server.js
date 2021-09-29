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
app.use(morgan('dev'));

// initialize routes
const indexRouter = require('../routes/index');
const categoriesRouter = require('../routes/categories');
const storyRouter = require('../routes/story');

app.use(indexRouter);
app.use(categoriesRouter);
app.use(storyRouter);

module.exports = app;