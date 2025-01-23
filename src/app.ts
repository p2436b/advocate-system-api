import 'reflect-metadata';
import express, { Express } from 'express';
import clientRoutes from './routes/v1/clients';
import advocateRoutes from './routes/v1/advocates';
import { AppDataSource } from './data-source';

const app: Express = express();
app.use(express.json());
app.use(clientRoutes);
app.use(advocateRoutes);

app.listen(3000, async () => {
	try {
		console.log('[Server]', 'Initializing database connection...');
		await AppDataSource.initialize();
		console.log('[Server]', 'Database connection initialized.');
	} catch (error) {
		console.error('Could not initialize database connection!', error);
	}

	console.log('[Server]', 'Server is running on http://localhost:3000');
});
