import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Cases } from './Cases';
import { Lookups } from './Lookups';

@Index('clients_pk', ['id'], { unique: true })
@Index('clients_national_id_unique', ['nationalId'], { unique: true })
@Index('clients_phone_number_unique', ['phoneNumber'], { unique: true })
@Entity('clients', { schema: 'public' })
export class Clients {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('character varying', { name: 'first_name' })
	firstName: string;

	@Column('character varying', { name: 'last_name' })
	lastName: string;

	@Column('character varying', { name: 'national_id', unique: true })
	nationalId: string;

	@Column('character varying', { name: 'phone_number', unique: true })
	phoneNumber: string;

	@OneToMany(() => Cases, (cases) => cases.client)
	cases: Cases[];

	@ManyToOne(() => Lookups, (lookups) => lookups.clients)
	@JoinColumn([{ name: 'type_id', referencedColumnName: 'id' }])
	type: Lookups;
}
