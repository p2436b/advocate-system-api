import express from 'express';
import { Client } from '../../entities/Client';
import { AppDataSource } from '../../data-source';
import { ClientsFull } from '../../views/ClientsFull';

const clientRoutes = express.Router();
const clientRepository = AppDataSource.getRepository(Client);

clientRoutes
	.route('/clients')
	.get(async (req, res) => {
		const clients = await AppDataSource.getRepository(ClientsFull).find();
		res.json(clients);
	})
	.post(async (req, res) => {
		res.send('Got a POST request - clients');
	})
	.put((req, res) => {
		res.send('Got a PUT request - clients');
	})
	.delete((req, res) => {
		res.send('Got a DELETE request - clients');
	});

export default clientRoutes;
