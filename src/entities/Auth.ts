import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('auth_email_unique', ['email'], { unique: true })
@Index('auth_pk', ['id'], { unique: true })
@Index('auth_username_unique', ['username'], { unique: true })
@Entity('auth', { schema: 'public' })
export class Auth {
	@PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
	id: number;

	@Column('character varying', { name: 'username', unique: true })
	username: string;

	@Column('character varying', { name: 'password' })
	password: string;

	@Column('character varying', { name: 'email', unique: true })
	email: string;
}
