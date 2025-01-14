import express from 'express';
import { Clients } from '../../entities/Clients';
import { AppDataSource } from '../../data-source';

const clientRoutes = express.Router();
const clientRepository = AppDataSource.getRepository(Clients);

clientRoutes
	.route('/clients')
	.get(async (req, res) => {
		const clients = await clientRepository.find();
		res.send({ clients });
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
