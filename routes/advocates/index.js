const express = require('express');
const router = express.Router();

router
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

module.exports = router;
