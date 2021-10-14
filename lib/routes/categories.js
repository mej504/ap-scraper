const express = require('express');
const router = new express.Router();
const categories = require('../data/categories');
const Parser = require('../util/parser');
const ErrorWithCode = require('../error/customerror');
const { fetchNewsItems } = require('../util/fetch');

router.get('/NewsScraper/api/:category', async (req, res) => {

	const QUERY_REGEX = /^[a-zA-Z]*-?[a-zA-Z]*$/g;

	let parser = new Parser();

	try {

		if( !QUERY_REGEX.test(req.params.category ) ) {
			throw ErrorWithCode( 'Invalid query syntax', 400 );
		}

		if( !categories.includes(req.params.category) ) {
			throw ErrorWithCode( 'Unknown news category specified in query', 404 );
		}

		let rawHtml = await fetchNewsItems( req.params.category );
		let newsItems = parser.parseCards( rawHtml );

		res.status(200).send( newsItems );


	} catch( err ) {

		console.log(err);

		if( err.code ) {
			return res.status( err.code ).send( err.message );
		}

		return res.status(500).send('Request failed for an unknown reason.')

	}

})

module.exports = router;