// Core modules
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');

// Secondary modules
const { ErrorWithCode } = require('../error/customerror');

// Init app
const app = express();

// Interestingly enough, helmet isn't removing the X-Powered-By header
// on preflight requests. This may be an issue within the environment,
// but I'm not taking any chances and disabling it by default.
app.disable('X-Powered-By');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../build')));

// initialize routes
const indexRouter = require('../routes/index');
const categoriesRouter = require('../routes/categories');
const storyRouter = require('../routes/story');

app.use(indexRouter);
app.use(categoriesRouter);
app.use(storyRouter);

app.use( (req, res, next) => {
	next( ErrorWithCode('Resource not found', 404) );
})

// Error handling
app.use( (err, req, res, next) => {

	// * My custom error has a code property, instead of status, but errors thrown
	// * from inside other modules probably have a status property
	let statusCode = err.status || err.code || 500;
	let { message } = err;

	switch( statusCode ) {
		case 404:
			res.status(404).redirect('/');
			break;
		case 500:
			res.status(500).json({
				error: {
					message,
					status: 500
				}
			})
			break;
		default:
			res.status(500).json({
				erro: {
					message,
					status: 500
				}
			})
	}

})

module.exports = app;