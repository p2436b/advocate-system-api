import express from 'express';
import { Advocate } from '../../entities/Advocate';
import { AppDataSource } from '../../data-source';

const advocateRoutes = express.Router();
const advocateRepository = AppDataSource.getRepository(Advocate);

advocateRoutes
	.route('/advocates')
	.get(async (req, res) => {
		const advocates = await advocateRepository.find();
		res.json(advocates);
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
