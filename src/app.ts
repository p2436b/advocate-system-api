import 'reflect-metadata';
import express from 'express';
import clientRoutes from './routes/clients';
import advocateRoutes from './routes/advocates';
import { AppDataSource } from './data-source';

const app = express();

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
