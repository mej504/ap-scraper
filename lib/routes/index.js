const express = require('express');
const path = require('path');
const router = new express.Router();

const indexDir = path.join(__dirname, '../../dist/');

router.get('/', (req, res) => {
	res.sendFile('')
})