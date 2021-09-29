const app = require('../lib/server/server');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3010;

// app.use(express.static(path.join(__dirname, '../build/static/')))
app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => {
	console.log(`App launched on port ${PORT}`);
})
