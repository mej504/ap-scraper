const https = require('https');
const fetcher = require('../util/fetcher');
const Parser = require('../util/parser');
const express = require('express');
const router = new express.Router();

router.get('/:category', async (req, res) => {

	let parser = new Parser();

	try {

		if( req.params.category ) {

			let rawHtml = await fetcher( req.params.category );
			let newsItems = await parser.parseCards( rawHtml );
			res.status(200).send( newsItems );

		}


	} catch( err ) {

		if(err) console.log(err);

		res.status(409).send('Request to AP new portal failed for an unknown reason.')

	}

})

module.exports = router;