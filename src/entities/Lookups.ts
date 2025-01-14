import {
	Column,
	Entity,
	Index,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Cases } from './Cases';
import { Clients } from './Clients';
import { Documents } from './Documents';

@Index('lookups_pk', ['id'], { unique: true })
@Entity('lookups', { schema: 'public' })
export class Lookups {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('integer', { name: 'group_id' })
	groupId: number;

	@Column('character varying', { name: 'title' })
	title: string;

	@OneToMany(() => Cases, (cases) => cases.court)
	cases: Cases[];

	@OneToMany(() => Cases, (cases) => cases.type)
	cases2: Cases[];

	@OneToMany(() => Clients, (clients) => clients.type)
	clients: Clients[];

	@OneToMany(() => Documents, (documents) => documents.type)
	documents: Documents[];
}
