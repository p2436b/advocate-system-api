const express = require('express');
const clientRoutes = require('./routes/clients');
const advocateRoutes = require('./routes/advocates');

const app = express();

app.use(clientRoutes);
app.use(advocateRoutes);

app.listen(3001, () => {
	console.log('Server is running on port 3001');
});
