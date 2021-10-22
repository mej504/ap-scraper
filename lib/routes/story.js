const express = require('express');
const router = new express.Router();
const { fetchNewsPage } = require('../util/fetch');
const Parser = require('../util/parser');
const ErrorWithCode = require('../error/customerror');


/********************************************************************************************/
// * These handle direct requests to /api and page refreshes from inside the app 
// * Refreshing the browser while inside the app sends the request to the path written by
// * react-router-dom. Those paths work fine while navigating the app, but they create invalid
// * request paths on a refresh

router.get(`${process.env.PUBLIC_URL}/api/story`, (req, res) => {
	res.status(304).redirect(process.env.PUBLIC_URL);
})

router.get(`${process.env.PUBLIC_URL}/story`, (req, res) => {
	res.status(304).redirect(process.env.PUBLIC_URL);
})

router.get(`${process.env.PUBLIC_URL}/story/*`, (req, res) => {
	res.status(304).redirect(process.env.PUBLIC_URL);
})

/********************************************************************************************/

router.get(`${process.env.PUBLIC_URL}/api/story/:slug`, async( req, res) => {

	// * AP's story slugs appear to follow a specific pattern, for example:
	// * congress-moves-to-avert-partial-government-shutdown-8f5b5b0c6c4cb12af8316ffc0b098771
	// * The slug ends in a hash, preceded by hyphen-delimited alphanumeric characters
	const SLUG_REGEX = /^([a-z0-9]+-)+([a-zA-Z0-9]+){1}$/g;
	const slug = req.params.slug;

	const parser = new Parser();

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