import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Advocate } from './Advocate';
import { Client } from './Client';
import { Lookup } from './Lookup';
import { Document } from './Document';

@Index('cases_pk', ['id'], { unique: true })
@Entity('cases', { schema: 'public' })
export class Case {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('text', { name: 'description', nullable: true })
	description: string | null;

	@Column('date', { name: 'open_date' })
	openDate: string;

	@Column('integer', { name: 'advocate_id' })
	advocateId: number;

	@ManyToMany(() => Advocate, (advocates) => advocates.cases)
	advocates: Advocate[];

	@ManyToOne(() => Client, (clients) => clients.cases, {
		onDelete: 'RESTRICT',
	})
	@JoinColumn([{ name: 'client_id', referencedColumnName: 'id' }])
	client: Client;

	@ManyToOne(() => Lookup, (lookups) => lookups.cases, {
		onDelete: 'RESTRICT',
	})
	@JoinColumn([{ name: 'court_id', referencedColumnName: 'id' }])
	court: Lookup;

	@ManyToOne(() => Lookup, (lookups) => lookups.cases2, {
		onDelete: 'RESTRICT',
	})
	@JoinColumn([{ name: 'type_id', referencedColumnName: 'id' }])
	type: Lookup;

	@OneToMany(() => Document, (documents) => documents.case)
	documents: Document[];
}
