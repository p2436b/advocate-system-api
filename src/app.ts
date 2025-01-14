import express from 'express';
import clientRoutes from './routes/clients';
import advocateRoutes from './routes/advocates';
import "reflect-metadata"

const app = express();

app.use(clientRoutes);
app.use(advocateRoutes);

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
