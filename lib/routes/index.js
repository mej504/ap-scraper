const express = require('express');
const path = require('path');
const router = new express.Router();

const buildDir = path.join(__dirname, '../../build/');

// Serve React app
router.get('/', (req, res) => {
	res.status(200).sendFile(`${buildDir}/index.html`);
})

module.exports = router;