import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Case } from './Case';
import { Lookup } from './Lookup';

@Index('documents_pk', ['id'], { unique: true })
@Entity('documents', { schema: 'public' })
export class Document {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('character varying', { name: 'title', nullable: true })
	title: string | null;

	@Column('text', { name: 'body', nullable: true })
	body: string | null;

	@ManyToOne(() => Case, (cases) => cases.documents, { onDelete: 'RESTRICT' })
	@JoinColumn([{ name: 'case_id', referencedColumnName: 'id' }])
	case: Case;

	@ManyToOne(() => Lookup, (lookups) => lookups.documents, {
		onDelete: 'RESTRICT',
	})
	@JoinColumn([{ name: 'type_id', referencedColumnName: 'id' }])
	type: Lookup;
}
