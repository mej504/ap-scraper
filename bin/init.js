const app = require('../lib/server/server');
const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
	console.log(`App launched on port ${PORT}`);
})
