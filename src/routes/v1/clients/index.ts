import express, { Request, Response } from 'express';
import { Client } from '../../../entities/Client';
import { AppDataSource } from '../../../data-source';

const clientRoutes = express.Router();
const clientRepository = AppDataSource.getRepository(Client);

clientRoutes
	.route('/api/v1/clients')
	.get(async (_, res: Response) => {
		const clients = await clientRepository.find();
		res.json(clients);
	})

	.post(async (req: Request, res: Response) => {
		try {
			const newClient = clientRepository.create(req.body);
			const client = await clientRepository.save(newClient);
			res.status(201).json(client);
		} catch (error) {
			res.status(500).send('An error occured');
		}
	});

clientRoutes
	.route('/api/v1/clients/:id')
	.get(async (req: Request, res: Response) => {
		const id = parseInt(req.params.id);
		if (Number.isNaN(id)) {
			res.status(401).send('Bad request, check id param');
			return;
		}
		const client = await clientRepository.findOneBy({ id });
		if (!client) {
			res.status(404).send('Client not found');
			return;
		}
		res.json(client);
	})

	.put(async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params.id);
			if (Number.isNaN(id)) {
				res.status(401).send('Bad request, check id param');
				return;
			}

			const client = await clientRepository.findOneBy({ id });
			if (!client) {
				res.status(404).send('Client not found');
				return;
			}

			const updateClient = req.body as Client;

			client.firstName = updateClient.firstName;
			client.lastName = updateClient.lastName;
			//client.nationalId = updateClient.nationalId;
			client.phoneNumber = updateClient.phoneNumber;
			client.type = updateClient.type;
			await clientRepository.save(client);

			res.status(204).json(client);
			return;
		} catch (error) {
			res.status(500).send('An error occured');
		}
	})

	.delete(async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params.id);
			if (Number.isNaN(id)) {
				res.status(401).send('Bad request, check id param');
				return;
			}

			const client = await clientRepository.findOneBy({ id });
			if (!client) {
				res.status(404).send('Client not found');
				return;
			}

			await clientRepository.remove(client);

			res.status(204).json(client);
			return;
		} catch (error) {
			res.status(500).send('An error occured');
		}
	});

export default clientRoutes;
