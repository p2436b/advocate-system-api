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
import { Advocates } from './Advocates';
import { Clients } from './Clients';
import { Lookups } from './Lookups';
import { Documents } from './Documents';

@Index('cases_pk', ['id'], { unique: true })
@Entity('cases', { schema: 'public' })
export class Cases {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('text', { name: 'description', nullable: true })
	description: string | null;

	@Column('date', { name: 'open_date' })
	openDate: string;

	@Column('integer', { name: 'advocate_id' })
	advocateId: number;

	@ManyToMany(() => Advocates, (advocates) => advocates.cases)
	advocates: Advocates[];

	@ManyToOne(() => Clients, (clients) => clients.cases, {
		onDelete: 'RESTRICT',
	})
	@JoinColumn([{ name: 'client_id', referencedColumnName: 'id' }])
	client: Clients;

	@ManyToOne(() => Lookups, (lookups) => lookups.cases, {
		onDelete: 'RESTRICT',
	})
	@JoinColumn([{ name: 'court_id', referencedColumnName: 'id' }])
	court: Lookups;

	@ManyToOne(() => Lookups, (lookups) => lookups.cases2, {
		onDelete: 'RESTRICT',
	})
	@JoinColumn([{ name: 'type_id', referencedColumnName: 'id' }])
	type: Lookups;

	@OneToMany(() => Documents, (documents) => documents.case)
	documents: Documents[];
}
