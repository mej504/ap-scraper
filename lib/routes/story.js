const express = require('express');
const router = new express.Router();
const { fetchNewsPage } = require('../util/fetcher');

router.get('/story/:slug', async( req, res) => {

	try {
		let test = await fetchNewsPage('jarrod-ramos-courts-maryland-newspapers-annapolis-2ec0cf15047f1e9530f68066be09601e');
		console.log(test);
		res.status(200).send(test);
	} catch(err) {
		console.log(err);
		res.status(404).send('Something fucked up big time =O');
	}

})

module.exports = router;