const https = require('https');
const fetcher = require('../util/fetcher');
const express = require('express');
const router = new express.Router();

router.get('/:category', async (req, res) => {

	let now = Date.now();

	if( req.params.category ) {
		let html = await fetcher(req.params.category);
		console.log(`Request completed in ${Date.now() - now}ms`);
	}

	/*
	const fetcher = https.request(options, (response) => {
		console.log('status: ' + response.statusCode );

		response.on('data', (data) => {
			console.log(data.toString());
		})

	})

	fetcher.end();
	*/
	res.send('eh');

})

module.exports = router;