const https = require('https');

const fetchNewsItems = ( category ) => new Promise((resolve, reject) => {

	const options = {
		hostname: 'apnews.com',
		path:`/hub/${category}`,
		method: 'GET',
		headers: {
			'Content-Type':'text/html'
		}
	}

	// Initialize empty string into which the response data from AP
	// will be concatenated
	let body = '';

	// Send request to AP news portal specified by category param above
	const req = https.request(options, (res) => {

		// Concatenate chunk converted to string to body
		res.on('data', (chunk) => {
			body += chunk.toString();
		})

		// Once all the data has been pulled, resolve with it
		res.on('end', () => {
			resolve(body);
		})

		res.on('error', (error) => {
			reject(error);
		})

	})

	req.end();

	return;

});

const fetchNewsPage = ( storySlug ) => new Promise( (resolve, reject) => {

	const options = {
		hostname: 'apnews.com',
		path:`/article/${storySlug}`,
		method: "GET",
		headers: {
			'Content-Type':'text/html'
		}
	}

	let body = '';

	const req = https.request(options, (res) => {

		res.on('data', (chunk) => {
			body += chunk.toString();
		})

		res.on('end', () => {
			resolve(body);
		})

		res.on('error', (error) => {
			reject(error);
		})
	})

	req.end();

	return;

});

module.exports = {
	fetchNewsItems,
	fetchNewsPage
}