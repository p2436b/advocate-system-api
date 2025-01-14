import { DataSource } from 'typeorm';
import { Client } from './entities/Client';
import { Lookup } from './entities/Lookup';
import { Advocate } from './entities/Advocate';
import { Document } from './entities/Document';
import { Case } from './entities/Case';
import { Auth } from './entities/Auth';
import { ClientsFull } from './views/ClientsFull';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'advocate_system',
	synchronize: false,
	entities: [Advocate, Client, Document, Case, Auth, Lookup, ClientsFull],
});
