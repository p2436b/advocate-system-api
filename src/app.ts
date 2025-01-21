import 'reflect-metadata';
import express, { Express } from 'express';
import clientRoutes from './routes/clients/v1';
import advocateRoutes from './routes/advocates/v1';
import { AppDataSource } from './data-source';

const app: Express = express();
app.use(express.json());
app.use(clientRoutes);
app.use(advocateRoutes);

app.listen(3000, async () => {
	try {
		console.log('Initializing database connection...');
		await AppDataSource.initialize();
		console.log('Database connection initialized.');
	} catch (error) {
		console.error('Could not initialize database connection!', error);
	}

	console.log('Server is running on http://localhost:3000');
});
