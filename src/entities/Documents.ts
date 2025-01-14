import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Cases } from './Cases';
import { Lookups } from './Lookups';

@Index('documents_pk', ['id'], { unique: true })
@Entity('documents', { schema: 'public' })
export class Documents {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('character varying', { name: 'title', nullable: true })
	title: string | null;

	@Column('text', { name: 'body', nullable: true })
	body: string | null;

	@ManyToOne(() => Cases, (cases) => cases.documents, { onDelete: 'RESTRICT' })
	@JoinColumn([{ name: 'case_id', referencedColumnName: 'id' }])
	case: Cases;

	@ManyToOne(() => Lookups, (lookups) => lookups.documents, {
		onDelete: 'RESTRICT',
	})
	@JoinColumn([{ name: 'type_id', referencedColumnName: 'id' }])
	type: Lookups;
}
