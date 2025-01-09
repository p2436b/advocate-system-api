const express = require('express');
const router = express.Router();

router
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

module.exports = router;
