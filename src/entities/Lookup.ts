import {
	Column,
	Entity,
	Index,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Case } from './Case';
import { Client } from './Client';
import { Document } from './Document';

@Index('lookups_pk', ['id'], { unique: true })
@Entity('lookups', { schema: 'public' })
export class Lookup {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('integer', { name: 'group_id' })
	groupId: number;

	@Column('character varying', { name: 'title' })
	title: string;

	@OneToMany(() => Case, (cases) => cases.court)
	cases: Case[];

	@OneToMany(() => Case, (cases) => cases.type)
	cases2: Case[];

	@OneToMany(() => Client, (clients) => clients.type)
	clients: Client[];

	@OneToMany(() => Document, (documents) => documents.type)
	documents: Document[];
}
