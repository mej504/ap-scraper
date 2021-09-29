const https = require('https');
const { fetchNewsItems } = require('../util/fetcher');
const Parser = require('../util/parser');
const express = require('express');
const router = new express.Router();
const categories = require('../data/categories');
const { ErrorWithCode } = require('../error/customerror');

router.get('/:category', async (req, res) => {

	let parser = new Parser();
	const queryRegex = /^[a-zA-Z]*-?[a-zA-Z]*$/g;

	try {

		if( !queryRegex.test(req.params.category ) ) {
			throw ErrorWithCode( 'Invalid query syntax', 400 );
		}

		if( !categories.includes(req.params.category) ) {
			throw ErrorWithCode( 'Unknown news category specified in query', 404 );
		}

		if( req.params.category ) {
			let rawHtml = await fetchNewsItems( req.params.category );
			let newsItems = await parser.parseCards( rawHtml );
			res.status(200).send( newsItems );
		}


	} catch( err ) {

		if( err.code ) {
			return res.status( err.code ).send( err.message );
		}

		res.status(409).send('Request to AP new portal failed for an unknown reason.')

	}

})

module.exports = router;