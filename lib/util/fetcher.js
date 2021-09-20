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

	let body = '';

	const req = https.request(options, (res) => {

		res.on('data', (chunk) => {
			body += chunk;
		})

		res.on('end', () => {
			resolve(body);
		})

		res.on('error', (error) => {
			reject(error.message);
		})

	})

	req.end();

});

module.exports = fetcher;