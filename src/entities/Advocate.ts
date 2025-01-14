import {
	Column,
	Entity,
	Index,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Case } from './Case';

@Index('advocates_bar_id_unique', ['barId'], { unique: true })
@Index('advocates_pk', ['id'], { unique: true })
@Index('advocates_phone_number_unique', ['phoneNumber'], { unique: true })
@Entity('advocates', { schema: 'public' })
export class Advocate {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('character varying', { name: 'first_name' })
	firstName: string;

	@Column('character varying', { name: 'last_name' })
	lastName: string;

	@Column('character varying', { name: 'bar_id', unique: true })
	barId: string;

	@Column('character varying', { name: 'phone_number', unique: true })
	phoneNumber: string;

	@ManyToMany(() => Case, (cases) => cases.advocates)
	@JoinTable({
		name: 'advocates_cases',
		joinColumns: [{ name: 'advocate_id', referencedColumnName: 'id' }],
		inverseJoinColumns: [{ name: 'case_id', referencedColumnName: 'id' }],
		schema: 'public',
	})
	cases: Case[];
}
