const express = require('express');
const router = new express.Router();
const { fetchNewsPage } = require('../util/fetch');
const Parser = require('../util/parser');
const { ErrorWithCode, TypeErrorWithCode } = require('../error/customerror');

router.get('/story/:slug', async( req, res) => {

	// * AP's story slugs appear to follow a specific pattern, for example:
	// * congress-moves-to-avert-partial-government-shutdown-8f5b5b0c6c4cb12af8316ffc0b098771
	// * The slug ends in a hash, preceded by hyphen-delimited alphanumeric characters
	const SLUG_REGEX = /^([a-z0-9]+-)+([a-zA-Z0-9]+){1}$/g;

	const parser = new Parser();
	const slug = req.params.slug;

	try {

		if( !SLUG_REGEX.test(req.params.slug) ) throw ErrorWithCode( 'Invalid query syntax', 400 );

		let pageMarkup = await fetchNewsPage( slug );
		let story = parser.parseNewsPage( pageMarkup );

		if( story !== null || story !== undefined ) {
			return res.status(200).send(story);
		} else {
			throw new Error();
		}

	} catch(err) {

		console.log(err);
		res.status(404).send('Oops! Something went wrong');

	}

})

module.exports = router;