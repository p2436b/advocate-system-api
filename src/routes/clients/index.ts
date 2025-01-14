import express from 'express';

const clientRoutes = express.Router();

clientRoutes
	.route('/clients')
	.get((req, res) => {
		res.send('Hello World - clients');
	})
	.post((req, res) => {
		res.send('Got a POST request - clients');
	})
	.put((req, res) => {
		res.send('Got a PUT request - clients');
	})
	.delete((req, res) => {
		res.send('Got a DELETE request - clients');
	});

export default clientRoutes;
