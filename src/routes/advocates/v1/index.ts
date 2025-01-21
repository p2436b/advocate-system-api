import express, { Request, Response } from 'express';
import { Advocate } from '../../../entities/Advocate';
import { AppDataSource } from '../../../data-source';

const advocateRoutes = express.Router();
const advocateRepository = AppDataSource.getRepository(Advocate);

advocateRoutes
	.route('/api/v1/advocates')
	.get(async (_, res: Response) => {
		const advocates = await advocateRepository.find();
		res.json(advocates);
	})

	.post(async (req: Request, res: Response) => {
		try {
			const newadvocate = advocateRepository.create(req.body);
			const advocate = await advocateRepository.save(newadvocate);
			res.status(201).json(advocate);
		} catch (error) {
			res.status(500).send('An error occured');
		}
	});

advocateRoutes
	.route('/api/v1/advocates/:id')
	.get(async (req: Request, res: Response) => {
		const id = parseInt(req.params.id);
		if (Number.isNaN(id)) {
			res.status(401).send('Bad request, check id param');
			return;
		}
		const advocate = await advocateRepository.findOneBy({ id });
		if (!advocate) {
			res.status(404).send('advocate not found');
			return;
		}
		res.json(advocate);
	})

	.put(async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params.id);
			if (Number.isNaN(id)) {
				res.status(401).send('Bad request, check id param');
				return;
			}

			const advocate = await advocateRepository.findOneBy({ id });
			if (!advocate) {
				res.status(404).send('advocate not found');
				return;
			}

			const updateadvocate = req.body as Advocate;

			advocate.firstName = updateadvocate.firstName;
			advocate.lastName = updateadvocate.lastName;
			//advocate.nationalId = updateadvocate.nationalId;
			advocate.phoneNumber = updateadvocate.phoneNumber;
			await advocateRepository.save(advocate);

			res.status(204).json(advocate);
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

			const advocate = await advocateRepository.findOneBy({ id });
			if (!advocate) {
				res.status(404).send('advocate not found');
				return;
			}

			await advocateRepository.remove(advocate);

			res.status(204).json(advocate);
			return;
		} catch (error) {
			res.status(500).send('An error occured');
		}
	});

export default advocateRoutes;
