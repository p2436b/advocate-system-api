import { DataSource } from 'typeorm';
import { Clients } from './entities/Clients';
import { Lookups } from './entities/Lookups';
import { Advocates } from './entities/Advocates';
import { Documents } from './entities/Documents';
import { Cases } from './entities/Cases';
import { Auth } from './entities/Auth';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'advocate_system',
	synchronize: false,
	entities: [Advocates, Clients, Documents, Cases, Auth, Lookups],
});
