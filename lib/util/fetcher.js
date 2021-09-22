const https = require('https');

const fetcher = ( category ) => new Promise((resolve, reject) => {

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

		res.on('data', (chunk) => {
			// Concatenate converted chunk
			body += chunk.toString();
		})

		res.on('end', () => {
			console.log(body);
			resolve(body);
		})

		res.on('error', (error) => {
			reject(error.message);
		})

	})

	req.end();

	return;

});

module.exports = fetcher;