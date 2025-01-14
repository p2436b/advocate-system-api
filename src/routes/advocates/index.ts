import express from 'express';
const advocateRoutes = express.Router();

advocateRoutes
	.route('/advocates')
	.get((req, res) => {
		res.send('Hello World - advocates');
	})
	.post((req, res) => {
		res.send('Got a POST request - advocates');
	})
	.put((req, res) => {
		res.send('Got a PUT request - advocates');
	})
	.delete((req, res) => {
		res.send('Got a DELETE request - advocates');
	});

export default advocateRoutes;
